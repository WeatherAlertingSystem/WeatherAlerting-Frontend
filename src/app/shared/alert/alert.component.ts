import { Component, OnInit } from '@angular/core';
import { HttpErrorService } from '../../interceptors/http-error.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = new Array<Alert>();

  constructor(private httpErrorService: HttpErrorService) {}

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  addAlert(type: string, message: string) {
    this.alerts.push({ type, message });
  }

  ngOnInit() {
    this.httpErrorService.error$.subscribe((httpError) => {
      // login attempts limiter, display waiting time to user
      if (httpError) {
        this.addAlert(
          'danger',
          `${httpError.statusCode} - ${httpError.error || ''} - ${
            httpError.message
          }`
        );
      }
    });
  }
}
