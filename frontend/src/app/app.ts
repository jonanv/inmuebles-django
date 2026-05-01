import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { IndicatorsModule } from './shared/indicators';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    IndicatorsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public showSpinner: boolean = false;

  public onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }
}
