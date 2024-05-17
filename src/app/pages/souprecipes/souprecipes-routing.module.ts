import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouprecipesPage } from './souprecipes.page';

const routes: Routes = [
  {
    path: '',
    component: SouprecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouprecipesPageRoutingModule {}
