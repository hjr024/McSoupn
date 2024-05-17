import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoastedtomatoPageRoutingModule } from './roastedtomato-routing.module';

import { RoastedtomatoPage } from './roastedtomato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoastedtomatoPageRoutingModule
  ],
  declarations: [RoastedtomatoPage]
})
export class RoastedtomatoPageModule {}
