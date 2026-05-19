import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Services
import { Notification as NotificationService } from './notification';

// Components
import { Notification as NotificationComponent} from './components/notification/notification';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
})
export class NotificationModule {
  static forRoot(): ModuleWithProviders<NotificationModule> {
    return {
      ngModule: NotificationModule,
      providers: [
        NotificationService
      ],
    };
  }
}
