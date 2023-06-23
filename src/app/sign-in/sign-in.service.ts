import { Injectable } from '@angular/core';
import { BackendService, Endpoints } from '../shared/services/backend.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(
    private readonly backendSvc: BackendService,
    private localStorage: LocalStorageService
  ) {}

  async signIn(login: string, password: string): Promise<void> {
    this.backendSvc
      .post(Endpoints.SIGN_IN, { username: login, password })
      .subscribe({
        next: (tokenObj) => {
          console.log(tokenObj);
          this.localStorage.setBearerToken(tokenObj.access_token);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
