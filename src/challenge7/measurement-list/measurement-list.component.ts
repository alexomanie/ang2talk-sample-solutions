import { Component, OnInit, Input } from '@angular/core';
import { MeasurementService, Measurement, MeasurementType } from '../shared/index';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.css'],
  providers: [MeasurementService]
})
export class MeasurementListComponent implements OnInit {
  @Input() measurementType: MeasurementType;
  measurements: Measurement[] = [];
  count: number = 10;

  constructor(private ts: MeasurementService) {

  }

  ngOnInit() {
    this.getHistory();
  }

  getHistory(): void {
    console.log(this.count);
    this.ts.getMeasurementHistory(this.count, this.measurementType).subscribe(data => this.measurements = data);
  }

}
