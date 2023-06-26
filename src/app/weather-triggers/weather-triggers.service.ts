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

  createWeatherTrigger(
    triggerBody: WeatherTrigger
  ): Observable<WeatherTrigger> {
    return this.backendSvc.post(Endpoints.WEATHER_TRIGGER, triggerBody);
  }

  updateWeatherTrigger(
    id: string,
    triggerBodyPoperties: any
  ): Observable<WeatherTrigger> {
    return this.backendSvc.patch(
      Endpoints.WEATHER_TRIGGER,
      id,
      triggerBodyPoperties
    );
  }

  deleteWeatherTrigger(id: string): Observable<WeatherTrigger> {
    return this.backendSvc.delete(Endpoints.WEATHER_TRIGGER, id);
  }
}
