import { Injectable } from '@angular/core';

// Imports
import { MatSnackBar } from '@angular/material/snack-bar';

// Components
import { Notification as NotificationComponent } from './components';

@Injectable({
  providedIn: 'root',
})
export class Notification {

  constructor(
    private snackBar: MatSnackBar
  ) {}

  public error(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      // duration: 3000,
      data: {
        message,
        type: 'error'
      },
      panelClass: ['mat-snackbar_error']
    });
  }

  public success(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      // duration: 3000,
      data: {
        message,
        type: 'success'
      },
      panelClass: ['mat-snackbar_success']
    });
  }
}
