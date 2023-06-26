import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, map } from 'rxjs';
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
  // public ready: Subject<string> = new Subject();
  // backendUrl!: string;

  constructor(private readonly http: HttpClient) {
    // this.getAssetConfigJson().subscribe({
    //   next: (value: typeof config) => {
    //     this.backendUrl = value.backendApiUrl;
    //     this.ready.next(this.backendUrl);
    //   },
    // });
  }

  private getBackendBaseUrl(): Observable<string> {
    return this.getAssetConfigJson().pipe(
      map((config) => config.backendApiUrl)
    );
  }

  private getAssetConfigJson(): Observable<typeof config> {
    return this.http.get<typeof config>('../assets/config.json');
  }

  get(
    path: string,
    params: HttpParams | undefined = undefined
  ): Observable<any> {
    // We need to await for backendUrl to be resolved, hence the pipe with concatMap
    return this.getBackendBaseUrl().pipe(
      concatMap((backendUrl) => this.http.get(backendUrl + path, { params }))
    );
  }

  post(path: string, body: any = undefined): Observable<any> {
    return this.getBackendBaseUrl().pipe(
      concatMap((backendUrl) => this.http.post(backendUrl + path, body))
    );
  }

  patch(path: string, id: string, body: any = undefined): Observable<any> {
    return this.getBackendBaseUrl().pipe(
      concatMap((backendUrl) =>
        this.http.patch(backendUrl + path + `/${id}`, body)
      )
    );
  }

  delete(path: string, id: string): Observable<any> {
    return this.getBackendBaseUrl().pipe(
      concatMap((backendUrl) => this.http.delete(backendUrl + path + `/${id}`))
    );
  }
}
