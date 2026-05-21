import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { LoginRoutingModule } from './login-routing-module';

// Components
import { Login } from './login';

@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
})
export class LoginModule {}
