import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoastedredPageRoutingModule } from './roastedred-routing.module';

import { RoastedredPage } from './roastedred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoastedredPageRoutingModule
  ],
  declarations: [RoastedredPage]
})
export class RoastedredPageModule {}
