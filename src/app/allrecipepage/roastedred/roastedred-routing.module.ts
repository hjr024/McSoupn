import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoastedredPage } from './roastedred.page';

const routes: Routes = [
  {
    path: '',
    component: RoastedredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoastedredPageRoutingModule {}
