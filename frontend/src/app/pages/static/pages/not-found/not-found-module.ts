import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing-module';
import { NotFound } from './not-found';

@NgModule({
  declarations: [
    NotFound
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
})
export class NotFoundModule {}
