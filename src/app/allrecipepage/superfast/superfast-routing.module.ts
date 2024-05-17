import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperfastPage } from './superfast.page';

const routes: Routes = [
  {
    path: '',
    component: SuperfastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperfastPageRoutingModule {}
