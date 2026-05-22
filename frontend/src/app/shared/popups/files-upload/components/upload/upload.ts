import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  public isUploading: boolean = false;
  public isUploaded: boolean = false;
  public isPaused: boolean = false;
  public isCancelled: boolean = false;

  public downloadURL: string | null = null;

  public bytesTransferred: number = 0;
  public totalBytes: number = 0;

  private interval!: ReturnType<typeof setInterval>;

  constructor() {}

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.startUploading();
  }

  public startUploading(): void {
    this.isUploading = true;
    this.isUploaded = false;
    this.isCancelled = false;

    this.totalBytes = this.file.size;

    this.interval = setInterval(() => {
      if (this.isPaused || this.isCancelled) {
        return;
      }

      if (this.bytesTransferred >= this.totalBytes) {
        this.bytesTransferred = this.totalBytes;
        this.percentage = 100;

        clearInterval(this.interval);

        this.isUploading = false;
        this.isUploaded = true;

        this.downloadURL = URL.createObjectURL(this.file);
        this.completed.next(this.downloadURL);
        return;
      }

      const increment = Math.floor(
        Math.random() * (this.totalBytes * 0.08)
      );

      this.bytesTransferred += increment;

      if (this.bytesTransferred > this.totalBytes) {
        this.bytesTransferred = this.totalBytes;
      }

      this.percentage = Math.floor(
        (this.bytesTransferred / this.totalBytes) * 100
      );
    }, 500);
  }

  public pause(): void {
    this.isPaused = true;
  }

  public resume(): void {
    this.isPaused = false;
  }

  public cancel(): void {
    this.isCancelled = true;
    this.isUploading = false;

    clearInterval(this.interval);

    this.percentage = 0;
    this.bytesTransferred = 0;
  }
}
