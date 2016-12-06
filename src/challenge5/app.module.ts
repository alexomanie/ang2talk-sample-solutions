import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RandomTemperatureComponent } from './random-temperature/random-temperature.component';
import { TemperatureListComponent } from './temperature-list/temperature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomTemperatureComponent,
    TemperatureListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
