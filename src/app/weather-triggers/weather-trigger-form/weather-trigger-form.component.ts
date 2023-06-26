import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  NotificationChannels,
  WeatherNotification,
} from '../models/weather-notification.class';
import { TriggerConditions } from '../models/weather-trigger-conditions.enum';
import { TriggerOffsets } from '../models/weather-trigger-offsets.enum';
import { TriggerTypes } from '../models/weather-trigger-types.enum';
import { WeatherTrigger } from '../models/weather-trigger.class';
import { WeatherTriggersService } from '../weather-triggers.service';

export enum FormMode {
  ADD,
  EDIT,
}

@Component({
  selector: 'app-weather-trigger-form',
  templateUrl: './weather-trigger-form.component.html',
  styleUrls: ['./weather-trigger-form.component.scss'],
})
export class WeatherTriggerFormComponent implements OnInit {
  @Input() weatherTrigger: WeatherTrigger | undefined;
  @Input() mode: FormMode = FormMode.ADD;
  form!: FormGroup;
  // triggerTypes = Object.freeze(TriggerTypes);
  triggerTypes = TriggerTypes;
  triggerConditions = Object.freeze(TriggerConditions);
  triggerOffsets = Object.freeze(TriggerOffsets);
  notificationChannels = Object.freeze(NotificationChannels);
  objectKeys = Object.keys;
  objectEntries = Object.entries;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly weatherTriggerSvc: WeatherTriggersService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [this.weatherTrigger?.name || ''],
      description: [this.weatherTrigger?.description || ''],
      location: [this.weatherTrigger?.location || ''],
      type: [this.weatherTrigger?.type || ''],
      threshold: [this.weatherTrigger?.threshold || ''],
      condition: [this.weatherTrigger?.condition || ''],
      offset_time: [this.weatherTrigger?.offset_time || ''],
      notification: this.formBuilder.array([]),
    });

    if (this.weatherTrigger?.notification?.length) {
      this.weatherTrigger.notification.forEach((notification) => {
        this.addNotification(notification);
      });
    }
  }

  get notifications() {
    return this.form.controls['notification'] as FormArray;
  }

  addNotification(notification: WeatherNotification | undefined = undefined) {
    const notificationForm = this.formBuilder.group({
      channel: [notification?.channel || ''],
      recipient: [notification?.recipient || ''],
    });
    this.notifications.push(notificationForm);
  }

  removeNotification(index: number) {
    this.notifications.removeAt(index);
  }

  create() {
    console.log('this.form.value :>> ', this.form.value);
    this.weatherTriggerSvc.createWeatherTrigger(this.form.value).subscribe({
      next: (newTrigger) => {
        console.log('Trigger created.', newTrigger);
      },
      error: (err) => {
        console.log('Trigger not created. Error: ', err);
      },
    });
  }

  update() {
    // this.awaitingSuccess = true;
    if (!this.weatherTrigger?._id)
      throw new Error('Cannot patch when id is undefined!');
    const cleanedTrigger = JSON.parse(JSON.stringify(this.form.value));
    this.excludePristine(this.form, cleanedTrigger);

    if (Object.keys(cleanedTrigger).length === 0) {
      // this.awaitingSuccess = false;
      console.warn('Nothing has changed!');
      return;
    }
    console.log('cleanedTrigger :>> ', cleanedTrigger);

    this.weatherTriggerSvc
      .updateWeatherTrigger(this.weatherTrigger._id, cleanedTrigger)
      .subscribe({
        next: (_) => {
          // this.awaitingSuccess = false;
        },
        error: (err) => {
          // this.awaitingSuccess = false;
          console.log(err);
        },
      });
  }

  delete() {
    if (
      !confirm(
        `Are you sure to delete the trigger ${this.weatherTrigger?.name}? This cannot be undone.`
      )
    )
      return;
    if (!this.weatherTrigger?._id)
      throw new Error('Cannot delete when id is undefined!');
    this.weatherTriggerSvc
      .deleteWeatherTrigger(this.weatherTrigger._id)
      .subscribe({
        next: (_) => {
          // this.awaitingSuccess = false;
        },
        error: (err) => {
          // this.awaitingSuccess = false;
          console.log(err);
        },
      });
  }

  excludePristine(formGroup: FormGroup, valuesObject: any) {
    const controls = formGroup.controls;
    for (const control in controls) {
      if (!controls[control].pristine) continue;
      delete valuesObject[control];
    }
  }
}
