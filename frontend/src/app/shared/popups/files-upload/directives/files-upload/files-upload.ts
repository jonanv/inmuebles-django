import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

// Imports
import { MatDialog } from '@angular/material/dialog';

// Components
import { FilesUpload as FilesUploadComponent } from '../../files-upload';

@Directive({
  selector: '[appFilesUpload]',
  standalone: false,
})
export class FilesUpload {
  @Input() public multiple!: boolean;
  @Input() public crop!: boolean;

  @Output() public changed: EventEmitter<string | string[]> = new EventEmitter<string | string[]>();

  constructor(private dialog: MatDialog) {}

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    this.openDialgo();
  }

  private openDialgo(): void {
      const dialogRef = this.dialog.open(FilesUploadComponent, {
        width: '550px',
        height: '500px',
        data: {
          multiple: this.multiple,
          crop: this.crop
        },
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        this.changed.emit(result || null);
      });
  }
}
