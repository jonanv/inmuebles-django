import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { MatDialogModule } from '@angular/material/dialog';

// Directives
import { FilesUpload as FilesUploadDirective } from './directives/files-upload';

// Components
import { FilesUpload } from './files-upload';

@NgModule({
  declarations: [
    FilesUpload,
    FilesUploadDirective,
  ],
  imports: [
      CommonModule,
      MatDialogModule,
  ],
  exports: [
    FilesUploadDirective
  ]
})
export class FilesUploadModule {}
