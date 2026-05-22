import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { Welcome } from './welcome';

const routes: Routes = [
  {
    path: '',
    component: Welcome
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
