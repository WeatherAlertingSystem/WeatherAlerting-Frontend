import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService, Endpoints } from '../shared/services/backend.service';
import { CurrentUserService } from '../shared/services/current-user.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(
    private readonly backendSvc: BackendService,
    private localStorage: LocalStorageService,
    private router: Router,
    private currentUserSvc: CurrentUserService
  ) {}

  async signIn(login: string, password: string): Promise<void> {
    this.backendSvc
      .post(Endpoints.SIGN_IN, { username: login, password })
      .subscribe({
        next: (tokenObj) => {
          console.log(tokenObj);
          this.localStorage.setBearerToken(tokenObj.access_token);
          setTimeout(() => {
            this.router.navigate(['/weather-trigger']);
            this.currentUserSvc.getData();
          }, 1000);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  signOut() {
    this.localStorage.removeBearerToken();
    this.currentUserSvc.clearUser();
    this.router.navigate(['/']);
  }
}
