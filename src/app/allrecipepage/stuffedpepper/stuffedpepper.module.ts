import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuffedpepperPageRoutingModule } from './stuffedpepper-routing.module';

import { StuffedpepperPage } from './stuffedpepper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuffedpepperPageRoutingModule
  ],
  declarations: [StuffedpepperPage]
})
export class StuffedpepperPageModule {}
