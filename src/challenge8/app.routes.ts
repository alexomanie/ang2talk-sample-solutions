import { Routes, RouterModule } from '@angular/router';
import { TemperatureOverviewComponent } from './temperature-overview/temperature-overview.component';
import { HumidityOverviewComponent } from './humidity-overview/humidity-overview.component';


export const routes: Routes = [
  {path: '', redirectTo: 'temperature', pathMatch: 'full'},
  {path: 'temperature', component: TemperatureOverviewComponent},
  {path: 'humidity', component: HumidityOverviewComponent}
];

export const AppRoutesModule = RouterModule.forRoot(routes);
