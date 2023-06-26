import { Injectable } from '@angular/core';
import { User } from '../models/user.class';
import { BackendService, Endpoints } from './backend.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  user: User | null = null;
  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly backendSvc: BackendService
  ) {
    const localUser = this.localStorage.getItem('user');
    if (localUser) {
      this.user = JSON.parse(localUser);
    } else if (this.localStorage.getBearerToken()) {
      this.getData();
    }
  }

  // void set(){
  //   this.l
  // }

  getData() {
    this.backendSvc.get(Endpoints.USER_ME).subscribe({
      next: (user) => {
        this.user = user;
        this.localStorage.setItem('user', JSON.stringify(user));
      },
    });
  }

  clearUser() {
    this.user = null;
    this.localStorage.removeItem('user');
  }

  // get user() {
  //   return this.user;
  // }
  // set user (user: any) {
  //   this.user = user;
  // }
}
