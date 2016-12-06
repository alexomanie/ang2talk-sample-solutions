import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutesModule} from './app.routes';

import { AppComponent } from './app.component';
import { RandomTemperatureComponent } from './random-temperature/random-temperature.component';
import { TemperatureListComponent } from './temperature-list/temperature-list.component';
import { TemperatureOverviewComponent } from './temperature-overview/temperature-overview.component';
import { HumidityOverviewComponent } from './humidity-overview/humidity-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomTemperatureComponent,
    TemperatureListComponent,
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
