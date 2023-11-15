import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUsuarioLoggeadoPageRoutingModule } from './home-usuario-loggeado-routing.module';

import { HomeUsuarioLoggeadoPage } from './home-usuario-loggeado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUsuarioLoggeadoPageRoutingModule
  ],
  declarations: [HomeUsuarioLoggeadoPage]
})
export class HomeUsuarioLoggeadoPageModule {}
