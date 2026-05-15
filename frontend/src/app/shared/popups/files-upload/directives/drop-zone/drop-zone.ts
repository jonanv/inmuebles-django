import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDropZone]',
  standalone: false,
})
export class DropZone {
  @Output() dropped: EventEmitter<FileList[]> = new EventEmitter<FileList[]>();
  @Output() hovered: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  // Drag and Drop Event Listeners
  // Dejar caer
  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    this.hovered.emit(false);
    if (event.dataTransfer?.files) {
      this.dropped.emit([event.dataTransfer.files]);
    }
  }

  // Arrastrar sobre
  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
    this.hovered.emit(true);
  }

  // Salir del área de arrastre
  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.hovered.emit(false);
  }
}
