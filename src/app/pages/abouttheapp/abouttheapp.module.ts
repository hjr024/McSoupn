import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbouttheappPageRoutingModule } from './abouttheapp-routing.module';

import { AbouttheappPage } from './abouttheapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbouttheappPageRoutingModule
  ],
  declarations: [AbouttheappPage]
})
export class AbouttheappPageModule {}
