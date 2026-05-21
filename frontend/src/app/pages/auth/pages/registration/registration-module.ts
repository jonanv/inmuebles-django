import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { RegistrationRoutingModule } from './registration-routing-module';

// Components
import { Registration } from './registration';

@NgModule({
  declarations: [
    Registration
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
})
export class RegistrationModule {}
