import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PideEnLineaPage } from './pide-en-linea.page';

const routes: Routes = [
  {
    path: '',
    component: PideEnLineaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PideEnLineaPageRoutingModule {}
