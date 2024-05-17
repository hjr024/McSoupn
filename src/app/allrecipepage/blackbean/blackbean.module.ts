import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackbeanPageRoutingModule } from './blackbean-routing.module';

import { BlackbeanPage } from './blackbean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackbeanPageRoutingModule
  ],
  declarations: [BlackbeanPage]
})
export class BlackbeanPageModule {}
