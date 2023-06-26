import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherTriggerEditorModalComponent } from './weather-trigger-editor-modal/weather-trigger-editor-modal.component';
import { WeatherTriggerFormComponent } from './weather-trigger-form/weather-trigger-form.component';
import { WeatherTriggersListComponent } from './weather-triggers-list/weather-triggers-list.component';
import { WeatherTriggersRoutingModule } from './weather-triggers-routing.module';

@NgModule({
  declarations: [
    WeatherTriggersListComponent,
    WeatherTriggerFormComponent,
    WeatherTriggerEditorModalComponent,
  ],
  imports: [
    CommonModule,
    WeatherTriggersRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [NgbActiveModal],
})
export class WeatherTriggersModule {}
