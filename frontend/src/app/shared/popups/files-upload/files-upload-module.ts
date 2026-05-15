import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { MatDialogModule } from '@angular/material/dialog';

// Directives
import { FilesUploadDirective } from './directives/files-upload';

// Components
import { FilesUploadComponent } from './files-upload';
import { DropZone } from './directives/drop-zone';

@NgModule({
  declarations: [FilesUploadComponent, FilesUploadDirective, DropZone],
  imports: [CommonModule, MatDialogModule],
  exports: [FilesUploadDirective],
})
export class FilesUploadModule {}
