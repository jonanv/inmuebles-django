import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDropZone]',
  standalone: false,
})
export class DropZone {
  @Output() public dropped: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() public hovered: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  // Drag and Drop Event Listeners
  // Dejar caer
  @HostListener('drop', ['$event'])
  public onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.dropped.emit(event.dataTransfer.files);
    }
    this.hovered.emit(false);
  }

  // Arrastrar sobre
  @HostListener('dragover', ['$event'])
  public onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.hovered.emit(true);
  }

  // Salir del área de arrastre
  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.hovered.emit(false);
  }
}
