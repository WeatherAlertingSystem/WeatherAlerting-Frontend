import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherTrigger } from '../models/weather-trigger.class';
import { WeatherTriggersService } from '../weather-triggers.service';

@Component({
  selector: 'app-weather-triggers-list',
  templateUrl: './weather-triggers-list.component.html',
  styleUrls: ['./weather-triggers-list.component.scss'],
})
export class WeatherTriggersListComponent {
  weatherTriggers$!: Observable<WeatherTrigger[]>;

  constructor(private weatherTriggerSvc: WeatherTriggersService) {
    this.weatherTriggers$ = this.weatherTriggerSvc.getAllWeatherTriggers();
  }

  // getAllWeatherTriggers(): Observable<WeatherTrigger[]>{
  //   return
  // }
}
