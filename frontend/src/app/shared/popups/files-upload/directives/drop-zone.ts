import { Directive } from '@angular/core';

@Directive({
  selector: '[appDropZone]',
  standalone: false,
})
export class DropZone {
  constructor() {}
}
