import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTriggerFormComponent } from './weather-trigger-form.component';

describe('WeatherTriggerFormComponent', () => {
  let component: WeatherTriggerFormComponent;
  let fixture: ComponentFixture<WeatherTriggerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherTriggerFormComponent],
    });
    fixture = TestBed.createComponent(WeatherTriggerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
