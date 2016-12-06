import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutesModule} from './app.routes';
import {MeasurementType} from './shared/index';

import { AppComponent } from './app.component';
import { MeasurementLatestComponent } from './measurement-latest/measurement-latest.component';
import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { TemperatureOverviewComponent } from './temperature-overview/temperature-overview.component';
import { HumidityOverviewComponent } from './humidity-overview/humidity-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementLatestComponent,
    MeasurementListComponent,
    TemperatureOverviewComponent,
    HumidityOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
