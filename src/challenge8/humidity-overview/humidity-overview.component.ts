import { Component, OnInit } from '@angular/core';
import { MeasurementType } from '../shared/index';

@Component({
  selector: 'app-humidity-overview',
  templateUrl: './humidity-overview.component.html',
  styleUrls: ['./humidity-overview.component.css']
})
export class HumidityOverviewComponent implements OnInit {

  humidityType: MeasurementType = MeasurementType.Humidity;
  humiditiesType: MeasurementType = MeasurementType.Humidities;

  constructor() { }

  ngOnInit() {
  }

}
