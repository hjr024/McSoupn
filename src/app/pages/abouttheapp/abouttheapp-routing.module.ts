import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbouttheappPage } from './abouttheapp.page';

const routes: Routes = [
  {
    path: '',
    component: AbouttheappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbouttheappPageRoutingModule {}
