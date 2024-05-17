import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlackbeanPage } from './blackbean.page';

const routes: Routes = [
  {
    path: '',
    component: BlackbeanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlackbeanPageRoutingModule {}
