import { Component } from '@angular/core';

// Imports
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  standalone: false,
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
})
export class Spinner {
  public color: ThemePalette = 'primary';
  public mode: ProgressSpinnerMode = 'indeterminate';
}
