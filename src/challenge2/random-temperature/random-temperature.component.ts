import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-temperature',
  templateUrl: './random-temperature.component.html',
  styles: []
})
export class RandomTemperatureComponent implements OnInit {

  temperature: number = 0;
  constructor() { }

  ngOnInit() {
  }

  generateTemperature(): void {
    this.temperature = Math.random() * 60 - 20;
  }
}
