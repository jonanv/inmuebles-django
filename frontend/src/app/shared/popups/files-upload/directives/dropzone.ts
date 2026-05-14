import { Directive } from '@angular/core';

@Directive({
  selector: '[appDropzone]',
  standalone: false,
})
export class Dropzone {
  constructor() {}
}
