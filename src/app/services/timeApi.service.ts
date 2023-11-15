import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeApiService {
apiKey: string = "534c15d0ce614aa5b3c140300231511"
apiUrl: String = "https://api.weatherapi.com/v1/current.json"; 

constructor(private http: HttpClient) { }


getWeatherByCity(city: string): Observable<any> {
  const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&aqi=yes`;
  return this.http.get(url).pipe(
    catchError(this.handlerError)
  )
}

private handlerError(error:HttpErrorResponse){
  return throwError(()=> {new Error("Algo falló: "+error.error)})
}

}
