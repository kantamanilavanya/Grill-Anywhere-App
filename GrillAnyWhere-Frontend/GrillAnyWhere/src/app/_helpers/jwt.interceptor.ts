import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const re = /signin/gi;
    // add authorization header with jwt token if available
    if (request.url.search(re) === -1) {

      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser && currentUser.accessToken) {
        console.log('jwt interceptor hit');
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.accessToken}`
          }
        });
      }
    }

    return next.handle(request);
  }
}
