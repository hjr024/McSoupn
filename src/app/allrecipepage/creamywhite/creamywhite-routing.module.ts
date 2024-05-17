import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreamywhitePage } from './creamywhite.page';

const routes: Routes = [
  {
    path: '',
    component: CreamywhitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreamywhitePageRoutingModule {}
