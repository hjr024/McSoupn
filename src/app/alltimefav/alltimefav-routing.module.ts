import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlltimefavPage } from './alltimefav.page';

const routes: Routes = [
  {
    path: '',
    component: AlltimefavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlltimefavPageRoutingModule {}
