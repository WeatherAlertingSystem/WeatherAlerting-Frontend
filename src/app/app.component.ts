import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import config from '../assets/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WeatherAlerting-Frontend';
  backendUrl!: string;

  constructor(private http: HttpClient) {
    this.getAssetConfigJson().subscribe({
      next: (value: typeof config) => {
        this.backendUrl = value.backendApiUrl;
      },
    });
  }

  getAssetConfigJson(): Observable<typeof config> {
    return this.http.get<typeof config>('../assets/config.json');
  }
}
