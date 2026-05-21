import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { MatCardModule } from '@angular/material/card';

// Routing
import { NotFoundRoutingModule } from './not-found-routing-module';

// Components
import { NotFound } from './not-found';

@NgModule({
  declarations: [
    NotFound
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    MatCardModule
  ],
})
export class NotFoundModule {}
