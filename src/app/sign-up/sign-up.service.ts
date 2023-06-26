import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService, Endpoints } from '../shared/services/backend.service';
import { CurrentUserService } from '../shared/services/current-user.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(
    private readonly backendSvc: BackendService,
    private localStorage: LocalStorageService,
    private router: Router,
    private currentUserSvc: CurrentUserService
  ) {}

  signUp(login: string, email: string, password: string) {
    this.backendSvc
      .post(Endpoints.SIGN_UP, { username: login, email, password })
      .subscribe({
        next: () => {
          alert('Your account has been created sucessfully');
          this.router.navigate(['/sign-in']);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
