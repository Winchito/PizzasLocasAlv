import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { TimeApiService } from '../services/timeApi.service';
import { Weather } from '../interfaces/weather';


@Component({
  selector: 'app-home-usuario-loggeado',
  templateUrl: './home-usuario-loggeado.page.html',
  styleUrls: ['./home-usuario-loggeado.page.scss'],
})
export class HomeUsuarioLoggeadoPage implements OnInit {
  
  constructor(public authService: AuthenticationService, private weatherService: TimeApiService) {}
  weather: Weather | undefined 
  ngOnInit() {
    this.weatherService.getWeatherByCity('Bogota').subscribe({
      next: (response)=>{
        this.weather= response
        console.log(this.weather);
      },
      error: (errorData)=>{
        console.log(errorData)
      }
    });
  }


}