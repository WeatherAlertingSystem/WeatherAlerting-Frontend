import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTriggerEditorModalComponent } from './weather-trigger-editor-modal.component';

describe('WeatherTriggerEditorModalComponent', () => {
  let component: WeatherTriggerEditorModalComponent;
  let fixture: ComponentFixture<WeatherTriggerEditorModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherTriggerEditorModalComponent],
    });
    fixture = TestBed.createComponent(WeatherTriggerEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
