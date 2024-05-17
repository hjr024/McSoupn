import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheeseburgerPage } from './cheeseburger.page';

const routes: Routes = [
  {
    path: '',
    component: CheeseburgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheeseburgerPageRoutingModule {}
