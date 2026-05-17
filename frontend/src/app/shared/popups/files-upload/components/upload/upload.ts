import { Component, OnInit, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

// Imports
import { Storage, ref, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot } from '@angular/fire/storage';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.html',
  styleUrl: './upload.scss',
})
export class Upload implements OnInit, OnDestroy {
  @Input() public file!: File;
  @Output() public complete: EventEmitter<string> = new EventEmitter<string>();

  private percentage: number = 0;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private storage: Storage
  ) {

  }

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.startUploading();
  }

  public ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy$.next();
    this.destroy$.complete();
  }

  public async startUploading(): Promise<void> {
    const path = `${ this.file.type.split('/')[0] }/${ Date.now() }_${ this.file.name }`;

    const storageRef = ref(this.storage, path);

    const uploadTask = uploadBytesResumable(storageRef, this.file);

    uploadTask.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        this.percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        this.complete.next(downloadURL);
      }
    );
  }
}
