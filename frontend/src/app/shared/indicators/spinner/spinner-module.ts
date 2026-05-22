import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components
import { Spinner } from './spinner';

@NgModule({
  declarations: [
    Spinner,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    Spinner,
  ],
})
export class SpinnerModule {}
