import { Component, OnInit, Input } from '@angular/core';
import 'chart.js';
import { MeasurementService, Measurement, MeasurementType } from '../shared/index';


@Component({
  selector: 'app-measurement-chart',
  templateUrl: './measurement-chart.component.html',
  styleUrls: ['./measurement-chart.component.css'],
  providers: [MeasurementService]
})
export class MeasurementChartComponent implements OnInit {

  @Input() measurementType: MeasurementType;
  count: number = 10;

  public lineChartData: Array<any> = [ {data: [], label: '-'}];

  public lineChartLabels: Array<any> = [];

  public lineChartOptions: any = {

    animation: false,

    responsive: true

  };
  public lineChartType: string = 'line';

  constructor(private ts: MeasurementService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory(): void {
    this.ts.getMeasurementHistory(this.count, this.measurementType)
      .subscribe(data => {
        this.lineChartData = [];
        this.lineChartLabels= [];
        let values = [];
        let labels: Array<any> =[];
        data.forEach(entry => {

          values.push(entry.value);
          let date = new Date(entry.timestamp);
          labels.push(`${date.toLocaleTimeString('de-de')}`);
        });
        this.lineChartLabels = labels;
        this.lineChartData = [{data: values, label: 'vergangene Werte'}];
      });
  }

}
