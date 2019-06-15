import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {LoginService} from './login.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
        catchError((error: HttpErrorResponse) => {
          console.log('Error in interceptor', error);
          if (error.status === 400) {
            this.loginService.logout();
            location.reload(true);
            localStorage.removeItem('idToken');
            this.router.navigate(['/login']);
          }
          return ErrorObservable.create(error);
        }));
  }
}
