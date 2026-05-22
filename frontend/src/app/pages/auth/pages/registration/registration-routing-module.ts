import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { Registration } from './registration';

const routes: Routes = [
  {
      path: '',
      component: Registration
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
