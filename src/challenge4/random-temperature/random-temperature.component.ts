import { Component, OnInit } from '@angular/core';
import {TemperatureService, Temperature} from '../shared/index';

@Component({
  selector: 'app-random-temperature',
  templateUrl: './random-temperature.component.html',
  styles: [],
  providers: [TemperatureService]
})
export class RandomTemperatureComponent implements OnInit {

  temperature: Temperature = new Temperature(0, new Date(Date.now()));
  constructor(private ts: TemperatureService) { }

  ngOnInit() {
    this.generateTemperature();
  }

  generateTemperature(): void {
    this.ts.getLatestTemperature()
          .subscribe(data => this.temperature = data,
                     error => console.log(error),
                     () => {console.log('completed'); });
  }
}
