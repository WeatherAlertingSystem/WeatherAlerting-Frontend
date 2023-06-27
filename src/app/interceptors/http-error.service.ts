import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpError } from './http-error-interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  error$: Subject<HttpError | null> = new Subject();

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.clear();
      }
    });
  }

  error(error: HttpError) {
    this.error$.next(error);
  }

  clear() {
    this.error$.next(null);
  }
}
