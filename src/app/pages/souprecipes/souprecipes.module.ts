import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouprecipesPageRoutingModule } from './souprecipes-routing.module';

import { SouprecipesPage } from './souprecipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouprecipesPageRoutingModule
  ],
  declarations: [SouprecipesPage]
})
export class SouprecipesPageModule {}
