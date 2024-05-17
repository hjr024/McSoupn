import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoastedtomatoPage } from './roastedtomato.page';

const routes: Routes = [
  {
    path: '',
    component: RoastedtomatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoastedtomatoPageRoutingModule {}
