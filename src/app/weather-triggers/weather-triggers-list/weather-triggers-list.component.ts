import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherTrigger } from '../models/weather-trigger.class';
import { WeatherTriggerEditorModalComponent } from '../weather-trigger-editor-modal/weather-trigger-editor-modal.component';
import { WeatherTriggersService } from '../weather-triggers.service';

@Component({
  selector: 'app-weather-triggers-list',
  templateUrl: './weather-triggers-list.component.html',
  styleUrls: ['./weather-triggers-list.component.scss'],
})
export class WeatherTriggersListComponent {
  weatherTriggers$!: Observable<WeatherTrigger[]>;
  @ViewChild(WeatherTriggerEditorModalComponent)
  modal!: WeatherTriggerEditorModalComponent;

  constructor(private weatherTriggerSvc: WeatherTriggersService) {
    console.log('helo :>> ');
    this.weatherTriggers$ = this.weatherTriggerSvc.getAllWeatherTriggers();
  }
  // getAllWeatherTriggers(): Observable<WeatherTrigger[]>{
  //   return
  // }
}
