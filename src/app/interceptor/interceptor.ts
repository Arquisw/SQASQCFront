import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  cookieService: any;

  constructor(//private cookieService: CookieService
  ) { }

  intercept<T,R>(req: HttpRequest<T>, next: HttpHandler):
  Observable<HttpEvent<R>> {
    const token = this.cookieService.get('token');

    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}