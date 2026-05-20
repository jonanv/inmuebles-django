import { Component } from '@angular/core';

// Services
import { Notification as NotificationService } from './services';

@Component({
  selector: 'app-root',
  standalone: false,
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
