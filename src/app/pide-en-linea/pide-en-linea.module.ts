import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PideEnLineaPageRoutingModule } from './pide-en-linea-routing.module';

import { PideEnLineaPage } from './pide-en-linea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PideEnLineaPageRoutingModule
  ],
  declarations: [PideEnLineaPage]
})
export class PideEnLineaPageModule {}
