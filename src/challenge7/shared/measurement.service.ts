import { Injectable } from '@angular/core';
import { Measurement, MeasurementType } from './index';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MeasurementService {

  baseAdress = 'http://localhost:3000/api/v1/weather';
   constructor(private http: Http) { }

  getLatestMeasurement(type: MeasurementType): Observable<Measurement>{

    return this.http.get(`${this.baseAdress}/${type}`).map(response => {return response.json() as Measurement; });
  }

  getMeasurementHistory(count: number, type: MeasurementType): Observable<Measurement[]> {
    return this.http.get(`${this.baseAdress}/${type}/${count}`).map(r => r.json().values);
  }

}

