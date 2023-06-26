import { Component } from '@angular/core';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { SignInService } from '../../sign-in/sign-in.service';
import { CurrentUserService } from '../services/current-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  faWind = faWind;
  constructor(
    private readonly signInSvc: SignInService,
    public currentUserSvc: CurrentUserService
  ) {}

  signOut() {
    this.signInSvc.signOut();
  }
}
