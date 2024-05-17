import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomatohamburgerPageRoutingModule } from './tomatohamburger-routing.module';

import { TomatohamburgerPage } from './tomatohamburger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomatohamburgerPageRoutingModule
  ],
  declarations: [TomatohamburgerPage]
})
export class TomatohamburgerPageModule {}
