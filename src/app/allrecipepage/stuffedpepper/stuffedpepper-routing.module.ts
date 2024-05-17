import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuffedpepperPage } from './stuffedpepper.page';

const routes: Routes = [
  {
    path: '',
    component: StuffedpepperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuffedpepperPageRoutingModule {}
