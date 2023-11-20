import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoPedidoPage } from './catalogo-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoPedidoPageRoutingModule {}
