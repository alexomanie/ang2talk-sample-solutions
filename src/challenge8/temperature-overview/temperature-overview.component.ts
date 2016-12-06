import { Component, OnInit } from '@angular/core';
import { MeasurementType } from '../shared/index';

@Component({
  selector: 'app-temperature-overview',
  templateUrl: './temperature-overview.component.html',
  styleUrls: ['./temperature-overview.component.css']
})
export class TemperatureOverviewComponent implements OnInit {

  temperatureType: MeasurementType = MeasurementType.Temperature;
  temperaturesType: MeasurementType = MeasurementType.Temperatures;

  constructor() { }

  ngOnInit() {
  }

}
