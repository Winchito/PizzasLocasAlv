import { Component, OnInit } from '@angular/core';
import { TimeApiService } from '../services/timeApi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  weather: [] = []
  constructor(private weatherService: TimeApiService) {}
  ngOnInit(): void {
    localStorage.clear()
    this.weatherService.getWeatherByCity('Bogota').subscribe({
      next: (response)=>{
        this.weather= response
        console.log(this.weather)
      },
      error: (errorData)=>{
        console.log(errorData)
      }
    });
  }
}


