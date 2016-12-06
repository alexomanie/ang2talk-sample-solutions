import { Injectable } from '@angular/core';
import { Temperature } from './index';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class TemperatureService {

  baseAdress = 'http://localhost:3000/api/v1/weather';
  constructor(private http: Http) { }

  getLatestTemperature(): Observable<Temperature>{
    return this.http.get(`${this.baseAdress}/temperature`).map(response => {return response.json() as Temperature; });
  }

  getTemperatureHistory(count: number): Observable<Temperature[]> {
    return this.http.get(`${this.baseAdress}/temperatures/${count}`).map(r => r.json().values);
  }

}
