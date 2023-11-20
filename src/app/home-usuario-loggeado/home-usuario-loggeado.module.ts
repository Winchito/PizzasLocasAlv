import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUsuarioLoggeadoPageRoutingModule } from './home-usuario-loggeado-routing.module';

import { HomeUsuarioLoggeadoPage } from './home-usuario-loggeado.page';
import { HttpClientModule } from '@angular/common/http';
import { TimeApiService } from '../services/timeApi.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUsuarioLoggeadoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomeUsuarioLoggeadoPage],
  providers:[TimeApiService]
})
export class HomeUsuarioLoggeadoPageModule {}
