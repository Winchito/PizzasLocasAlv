import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeUsuarioLoggeadoPage } from './home-usuario-loggeado.page';

const routes: Routes = [
  {
    path: '',
    component: HomeUsuarioLoggeadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeUsuarioLoggeadoPageRoutingModule {}
