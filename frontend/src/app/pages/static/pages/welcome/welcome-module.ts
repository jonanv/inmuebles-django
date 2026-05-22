import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { MatCardModule } from '@angular/material/card';

// Routing
import { WelcomeRoutingModule } from './welcome-routing-module';

// Components
import { Welcome } from './welcome';

@NgModule({
  declarations: [
    Welcome
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatCardModule
  ],
})
export class WelcomeModule {}
