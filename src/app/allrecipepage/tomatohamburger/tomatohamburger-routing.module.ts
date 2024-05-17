import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomatohamburgerPage } from './tomatohamburger.page';

const routes: Routes = [
  {
    path: '',
    component: TomatohamburgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomatohamburgerPageRoutingModule {}
