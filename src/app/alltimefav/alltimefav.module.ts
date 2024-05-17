import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlltimefavPageRoutingModule } from './alltimefav-routing.module';

import { AlltimefavPage } from './alltimefav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlltimefavPageRoutingModule
  ],
  declarations: [AlltimefavPage]
})
export class AlltimefavPageModule {}
