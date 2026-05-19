import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { IndicatorsModule } from './shared/indicators';
import { PopupsModule } from './shared/popups';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    IndicatorsModule,
    PopupsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public showSpinner: boolean = false;

  constructor() { }

  public onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  public onFilesChanged(urls: string | string[]): void {
    console.log('urls:', urls);
  }
}
