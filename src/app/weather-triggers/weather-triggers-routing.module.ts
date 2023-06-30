import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherTriggersListComponent } from './weather-triggers-list/weather-triggers-list.component';

const routes: Routes = [{ path: '', component: WeatherTriggersListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherTriggersRoutingModule {}
