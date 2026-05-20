import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Modules
import { NotificationModule } from './services';
import { IndicatorsModule } from './shared/indicators';
import { PopupsModule } from './shared/popups';

// Components
import { App } from './app';
import { Header } from './components';

@NgModule({
  declarations: [
    App,
    Header
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    NotificationModule,
    IndicatorsModule,
    PopupsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
  ],
})
export class AppModule {}
