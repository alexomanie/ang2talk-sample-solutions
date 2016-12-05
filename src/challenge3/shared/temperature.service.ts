import { Injectable } from '@angular/core';
import { Temperature } from './index';

@Injectable()
export class TemperatureService {

  constructor() { }

  getLatestTemperature(): Temperature{
    let value = Math.random() * 60 - 20;
    return new Temperature(value, new Date(Date.now()));
  }

}
