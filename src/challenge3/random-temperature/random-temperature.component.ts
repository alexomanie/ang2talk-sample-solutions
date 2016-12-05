import { Component, OnInit } from '@angular/core';
import {TemperatureService, Temperature} from '../shared/index';

@Component({
  selector: 'app-random-temperature',
  templateUrl: './random-temperature.component.html',
  styles: [],
  providers: [TemperatureService]
})
export class RandomTemperatureComponent implements OnInit {

  temperature: Temperature;
  constructor(private ts: TemperatureService) { }

  ngOnInit() {
    this.generateTemperature();
  }

  generateTemperature(): void {
    this.temperature = this.ts.getLatestTemperature();
  }
}
