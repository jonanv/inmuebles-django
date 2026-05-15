import { Component } from '@angular/core';

@Component({
  selector: 'app-files-upload',
  standalone: false,
  templateUrl: './files-upload.html',
  styleUrl: './files-upload.scss',
})
export class FilesUpload {
  public isHovering: boolean = false;

  public toggleHovered($event: boolean): void {

  }
}
