import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTriggersListComponent } from './weather-triggers-list.component';

describe('WeatherTriggersListComponent', () => {
  let component: WeatherTriggersListComponent;
  let fixture: ComponentFixture<WeatherTriggersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherTriggersListComponent],
    });
    fixture = TestBed.createComponent(WeatherTriggersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
