import { Component, OnInit, Input } from '@angular/core';
import {MeasurementService, Measurement, MeasurementType} from '../shared/index';

@Component({
  selector: 'app-latest-measurement',
  templateUrl: './measurement-latest.component.html',
  styles: [],
  providers: [MeasurementService]
})
export class MeasurementLatestComponent implements OnInit {
  @Input() measurementType: MeasurementType;

  measurement: Measurement = new Measurement(0, new Date(Date.now()));
  constructor(private ts: MeasurementService) { }

  ngOnInit() {
    this.getLatestMeasurement();
  }

  getLatestMeasurement(): void {
    this.ts.getLatestMeasurement(this.measurementType)
          .subscribe(data => this.measurement = data,
                     error => console.log(error),
                     () => {console.log('completed'); });
  }
}
