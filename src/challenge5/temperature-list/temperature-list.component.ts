import { Component, OnInit } from '@angular/core';
import { TemperatureService, Temperature } from '../shared/index';

@Component({
  selector: 'app-temperature-list',
  templateUrl: './temperature-list.component.html',
  styleUrls: ['./temperature-list.component.css'],
  providers: [TemperatureService]
})
export class TemperatureListComponent implements OnInit {

  temperatures: Temperature[] = [];
  count: number = 10;

  constructor(private ts: TemperatureService) {

  }

  ngOnInit() {
    this.getHistory();
  }

  getHistory(): void {
    console.log(this.count);
    this.ts.getTemperatureHistory(this.count).subscribe(data => this.temperatures = data);
  }

}
