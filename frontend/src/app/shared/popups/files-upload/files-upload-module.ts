import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FilesUpload } from './files-upload';

@NgModule({
  declarations: [
    FilesUpload,
  ],
  imports: [CommonModule],
})
export class FilesUploadModule {}
