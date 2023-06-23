import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService, Endpoints } from '../shared/services/backend.service';
import { WeatherTrigger } from './models/weather-trigger.class';

@Injectable({
  providedIn: 'root',
})
export class WeatherTriggersService {
  constructor(private readonly backendSvc: BackendService) {}

  getAllWeatherTriggers(): Observable<WeatherTrigger[]> {
    return this.backendSvc.get(Endpoints.WEATHER_TRIGGER);
  }
}
