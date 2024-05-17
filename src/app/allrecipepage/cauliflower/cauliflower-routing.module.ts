import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CauliflowerPage } from './cauliflower.page';

const routes: Routes = [
  {
    path: '',
    component: CauliflowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CauliflowerPageRoutingModule {}
