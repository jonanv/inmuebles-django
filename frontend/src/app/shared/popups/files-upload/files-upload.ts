import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  multiple: boolean;
  crop: boolean;
}

@Component({
  selector: 'app-files-upload',
  standalone: false,
  templateUrl: './files-upload.html',
  styleUrl: './files-upload.scss',
})
export class FilesUpload implements OnInit {
  public isHovering: boolean = false;
  public files!: File[];
  private imageFile!: File;
  public isError!: boolean;
  public filesURLs: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<FilesUpload>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.files = [];
  }

  public toggleHovered(event: boolean): void {
    this.isHovering = event;
  }

  public onDrop(files: FileList): void {
    this.dropGeneral(files);
  }

  public onDropFile(event: FileList | any): void {
    this.dropGeneral(event.target.files)
  }

  public dropGeneral(files: FileList): void {
    this.isError = false;

    if (this.data.crop && files.length > 1) {
      this.isError = true;
      return;
    }

    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i) as File);
    }

    console.log(files);
  }

  public onUploadCompleted(url: string): void {
    this.filesURLs.push(url);
  }

  public onClose(): void {
    this.dialogRef.close(this.filesURLs);
  }

  public onCompleted(): void {
    const response = this.data.multiple ? this.filesURLs : this.filesURLs[0];
    this.dialogRef.close(response);
  }
}
