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

  // @Input() type = 'danger';
  // @Input() message = '';
  // alerts: Array<{type:string, message:string}> = new Array<{type:string, message:string}>();
  // constructor(
  //   private readonly httpErrorService: HttpErrorService,
  // ) {}

  ngOnInit() {
    this.httpErrorService.error$.subscribe((httpError) => {
      // login attempts limiter, display waiting time to user
      if (httpError) {
        this.addAlert(
          'danger',
          `${httpError.statusCode} - ${httpError.error} - ${httpError.message}`
        );
      }
    });
  }

  // addAlert(type, message){
  //   this.alerts.push()
  // }

  // ngOnDestroy() {
  //   this.httpErrorService.error$.unsubscribe();
  //   // console.log('destroyed alert')
  // }
  // show(type: string, message: string): void {
  //   this.type = type;
  //   this.message = message;
  // }
  // closeAlert() {
  //   // console.log('closed alert')
  //   this.httpErrorService.clear();
  //   // this.message = null;
  // }
}
