import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  public setBearerToken(token: string) {
    this.setItem('access_token', token);
  }

  public getBearerToken(): string | null {
    return this.getItem('access_token');
  }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
}
