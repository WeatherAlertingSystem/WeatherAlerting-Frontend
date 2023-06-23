import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, concatMap } from 'rxjs';
import config from '../../../assets/config.json';

// const prefix = (v = 1) => `/api/v${v}`;

export enum Endpoints {
  SIGN_UP = '/api/v1/sign-up',
  SIGN_IN = '/api/v1/auth',
  WEATHER_TRIGGER = '/api/v1/user/weather-trigger',
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  public ready: Subject<string> = new Subject();
  backendUrl!: string;

  constructor(private readonly http: HttpClient) {
    this.getAssetConfigJson().subscribe({
      next: (value: typeof config) => {
        this.backendUrl = value.backendApiUrl;
        this.ready.next(this.backendUrl);
      },
    });
  }

  getAssetConfigJson(): Observable<typeof config> {
    return this.http.get<typeof config>('../assets/config.json');
  }

  get(
    path: string,
    params: HttpParams | undefined = undefined
  ): Observable<any> {
    // We need to await for backendUrl to be resolved, hence the pipe with concatMap
    return this.ready.pipe(
      concatMap(() => this.http.get(this.backendUrl + path, { params }))
    );
  }

  post(path: string, body: any = undefined): Observable<any> {
    const url = this.backendUrl + path;
    return this.http.post(url, body);
  }
}
