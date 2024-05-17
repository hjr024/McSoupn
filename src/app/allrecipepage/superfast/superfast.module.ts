import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperfastPageRoutingModule } from './superfast-routing.module';

import { SuperfastPage } from './superfast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperfastPageRoutingModule
  ],
  declarations: [SuperfastPage]
})
export class SuperfastPageModule {}
