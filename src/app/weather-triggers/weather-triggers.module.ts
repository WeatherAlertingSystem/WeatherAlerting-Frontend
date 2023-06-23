import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherTriggersRoutingModule } from './weather-triggers-routing.module';
import { WeatherTriggersListComponent } from './weather-triggers-list/weather-triggers-list.component';

@NgModule({
  declarations: [WeatherTriggersListComponent],
  imports: [CommonModule, WeatherTriggersRoutingModule],
})
export class WeatherTriggersModule {}
