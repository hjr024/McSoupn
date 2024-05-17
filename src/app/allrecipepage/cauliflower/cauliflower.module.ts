import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CauliflowerPageRoutingModule } from './cauliflower-routing.module';

import { CauliflowerPage } from './cauliflower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CauliflowerPageRoutingModule
  ],
  declarations: [CauliflowerPage]
})
export class CauliflowerPageModule {}
