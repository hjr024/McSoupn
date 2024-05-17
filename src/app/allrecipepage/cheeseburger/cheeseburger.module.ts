import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheeseburgerPageRoutingModule } from './cheeseburger-routing.module';

import { CheeseburgerPage } from './cheeseburger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheeseburgerPageRoutingModule
  ],
  declarations: [CheeseburgerPage]
})
export class CheeseburgerPageModule {}
