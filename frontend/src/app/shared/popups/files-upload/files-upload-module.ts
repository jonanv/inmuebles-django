import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { MatDialogModule } from '@angular/material/dialog';

// Directives
import { FilesUploadDirective } from './directives/files-upload/files-upload';
import { DropZone as DropZoneDirective } from './directives/drop-zone/drop-zone';

// Components
import { FilesUpload } from './files-upload';

@NgModule({
  declarations: [
    FilesUpload,
    FilesUploadDirective,
    DropZoneDirective
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    FilesUploadDirective,
    DropZoneDirective
  ],
})
export class FilesUploadModule {}
