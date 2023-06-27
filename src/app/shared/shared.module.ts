import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, AlertComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, NgbModule],
  exports: [NavbarComponent, AlertComponent],
})
export class SharedModule {}
