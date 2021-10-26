import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormativasPageRoutingModule } from './normativas-routing.module';

import { NormativasPage } from './normativas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormativasPageRoutingModule
  ],
  declarations: [NormativasPage]
})
export class NormativasPageModule {}
