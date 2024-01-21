import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

const UNAUTHORIZED = 401;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    let httpHeaders = new HttpHeaders();
    
    const authorization = sessionStorage.getItem('Authorization');
    if(authorization){
        httpHeaders = httpHeaders.append('Authorization', authorization);
    }    
    sessionStorage.removeItem('userdetails');
    const xsrf = sessionStorage.getItem('XSRF-TOKEN');
    if(xsrf) {
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
    return next.handle(xhr).pipe(tap((response: HttpEvent<any>)=> {
      if (response instanceof HttpResponse) {
        if(response.headers.get('Authorization') !== null) {
          window.sessionStorage.setItem('Authorization',response.headers.get('Authorization')!);
        }
      }
    },
    (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== UNAUTHORIZED) {
          return;
        }
      }
    }));
  }
}