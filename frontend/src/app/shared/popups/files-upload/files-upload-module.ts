import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { FilesUpload as FilesUploadDirective } from './directives/files-upload';

// Components
import { FilesUpload } from './files-upload';

@NgModule({
  declarations: [
    FilesUpload,
    FilesUploadDirective,
  ],
  imports: [CommonModule],
})
export class FilesUploadModule {}
