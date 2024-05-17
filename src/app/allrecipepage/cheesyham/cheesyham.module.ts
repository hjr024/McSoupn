import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheesyhamPageRoutingModule } from './cheesyham-routing.module';

import { CheesyhamPage } from './cheesyham.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheesyhamPageRoutingModule
  ],
  declarations: [CheesyhamPage]
})
export class CheesyhamPageModule {}
