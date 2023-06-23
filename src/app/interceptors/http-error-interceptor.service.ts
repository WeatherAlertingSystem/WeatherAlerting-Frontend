import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorService } from './http-error.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor(private readonly httpErrorService: HttpErrorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        console.log(
          `HttpErrorInterceptorService.intercept() : ${error['status']} - ${error['statusText']}`
        );
        this.httpErrorService.error(error);
        return throwError(error);
      })
    );
  }
}
