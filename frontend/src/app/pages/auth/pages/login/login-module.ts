import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

// Routing
import { LoginRoutingModule } from './login-routing-module';

// Components
import { Login } from './login';
import { IndicatorsModule, SpinnerModule } from "../../../../shared";

@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    IndicatorsModule,
    SpinnerModule
],
})
export class LoginModule {}
