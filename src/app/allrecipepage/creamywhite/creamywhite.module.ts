import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreamywhitePageRoutingModule } from './creamywhite-routing.module';

import { CreamywhitePage } from './creamywhite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreamywhitePageRoutingModule
  ],
  declarations: [CreamywhitePage]
})
export class CreamywhitePageModule {}
