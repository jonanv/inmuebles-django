import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

// Imports
import { Storage, ref, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot, UploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.html',
  styleUrl: './upload.scss',
})
export class Upload implements OnInit {
  @Input() public file!: File;
  @Output() public completed: EventEmitter<string> = new EventEmitter<string>();

  public percentage: number = 0;
  public isUploading = false;
  public isUploaded = false;
  public downloadURL: string | null = null;

  public snapshot: UploadTaskSnapshot | null = null;

  public task!: UploadTask;

  constructor(
    private storage: Storage
  ) {

  }

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.startUploading();
  }

  public async startUploading(): Promise<void> {
    const path = `${ this.file.type.split('/')[0] }/${ Date.now() }_${ this.file.name }`;

    const storageRef = ref(this.storage, path);

    this.task = uploadBytesResumable(storageRef, this.file);

    this.isUploading = true;

    this.task.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        this.percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error('Upload failed:', error);
        this.isUploading = false;
      },
      async () => {
        this.isUploading = false;
        this.isUploaded = true;

        const downloadURL = await getDownloadURL(this.task.snapshot.ref);
        this.completed.next(downloadURL);
      }
    );
  }

  public pause(): void {
    this.task?.pause();
  }

  public resume(): void {
    this.task?.resume();
  }

  public cancel(): void {
    this.task?.cancel();
  }
}
