import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPedidoPageRoutingModule } from './catalogo-pedido-routing.module';

import { CatalogoPedidoPage } from './catalogo-pedido.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPedidoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CatalogoPedidoPage]
})
export class CatalogoPedidoPageModule {}
