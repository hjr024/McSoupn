import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheesyhamPage } from './cheesyham.page';

const routes: Routes = [
  {
    path: '',
    component: CheesyhamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheesyhamPageRoutingModule {}
