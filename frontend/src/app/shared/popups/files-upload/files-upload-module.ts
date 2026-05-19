import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { MatDialogModule } from '@angular/material/dialog';

// Directives
import { FilesUpload as FilesUploadDirective } from './directives/files-upload/files-upload';
import { DropZone as DropZoneDirective } from './directives/drop-zone/drop-zone';

// Pipes
import { FileSizePipe } from './pipes/file-size/file-size-pipe';

// Components
import { FilesUpload } from './files-upload';
import { Upload } from './components/upload/upload';

@NgModule({
  declarations: [
    FilesUpload,
    FilesUploadDirective,
    DropZoneDirective,
    Upload,
    FileSizePipe
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
