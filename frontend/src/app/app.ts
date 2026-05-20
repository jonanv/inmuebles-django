import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

// Modules
import { NotificationModule } from './services';
import { IndicatorsModule } from './shared/indicators';
import { PopupsModule } from './shared/popups';

// Services
import { Notification as NotificationService } from './services';

// Imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    IndicatorsModule,
    PopupsModule,
    NotificationModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public showSpinner: boolean = false;

  constructor(
    private notificationService: NotificationService
  ) { }

  public onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  public onFilesChanged(urls: string | string[]): void {
    console.log('urls:', urls);
  }

  public onError(): void {
    this.notificationService.error('Esto es un mensaje de error');
  }

  public onSuccess(): void {
    this.notificationService.success('Esto es un mensaje de éxito');
  }
}
