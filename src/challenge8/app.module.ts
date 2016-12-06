import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutesModule} from './app.routes';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import 'chart.js';

import { AppComponent } from './app.component';
import { MeasurementLatestComponent } from './measurement-latest/measurement-latest.component';
import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { TemperatureOverviewComponent } from './temperature-overview/temperature-overview.component';
import { HumidityOverviewComponent } from './humidity-overview/humidity-overview.component';
import { MeasurementChartComponent } from './measurement-chart/measurement-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementLatestComponent,
    MeasurementListComponent,
    TemperatureOverviewComponent,
    HumidityOverviewComponent,
    MeasurementChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutesModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
