import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoExistosoPage } from './pago-existoso.page';

const routes: Routes = [
  {
    path: '',
    component: PagoExistosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoExistosoPageRoutingModule {}
