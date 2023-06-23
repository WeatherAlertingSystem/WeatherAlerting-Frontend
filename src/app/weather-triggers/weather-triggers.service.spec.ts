import { TestBed } from '@angular/core/testing';

import { WeatherTriggersService } from './weather-triggers.service';

describe('WeatherTriggersService', () => {
  let service: WeatherTriggersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherTriggersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
