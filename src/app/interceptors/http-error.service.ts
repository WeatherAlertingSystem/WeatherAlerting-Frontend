import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  error$: Subject<string | null> = new Subject();

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.clear();
      }
    });
  }

  error(error: any) {
    this.error$.next(error);
  }

  clear() {
    this.error$.next(null);
  }
}
