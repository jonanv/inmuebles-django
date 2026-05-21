import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing-module';
import { Welcome } from './welcome';

@NgModule({
  declarations: [Welcome],
  imports: [CommonModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
