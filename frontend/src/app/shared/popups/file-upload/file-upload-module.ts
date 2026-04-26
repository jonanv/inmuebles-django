import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FileUpload } from './file-upload';

@NgModule({
  declarations: [
    FileUpload,
  ],
  imports: [CommonModule],
})
export class FileUploadModule {}
