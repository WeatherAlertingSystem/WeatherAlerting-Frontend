import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import config from '../assets/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WeatherAlerting-Frontend';
  backendUrl!: string;
  backendResponse = '';

  constructor(private http: HttpClient) {
    this.getAssetConfigJson().subscribe({
      next: (value: typeof config) => {
        this.backendUrl = value.backendApiUrl;
      },
    });
  }

  ngOnInit() {
    console.log('Init');
  }

  getAssetConfigJson(): Observable<typeof config> {
    return this.http.get<typeof config>('../assets/config.json');
  }

  testBackendConnection() {
    this.http.get<string>(this.backendUrl).subscribe({
      next: (res) => {
        this.backendResponse = res;
      },
      error: (err) => {
        this.backendResponse = err;
      },
    });
  }
}
