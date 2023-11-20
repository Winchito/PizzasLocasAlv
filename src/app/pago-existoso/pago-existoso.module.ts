import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoExistosoPageRoutingModule } from './pago-existoso-routing.module';

import { PagoExistosoPage } from './pago-existoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoExistosoPageRoutingModule
  ],
  declarations: [PagoExistosoPage]
})
export class PagoExistosoPageModule {}
