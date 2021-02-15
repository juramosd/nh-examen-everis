import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { StorageAuthService } from 'src/app/shared/services/storage-auth.service';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthorizatedInterceptor implements HttpInterceptor {

  private loginUrl = environment.loginUrl;
  constructor(
    private router: Router,
    private storage: StorageAuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      setHeaders: {
        Authorization: this.getToken()
      }
    });

    const response = next.handle(newRequest).pipe(
      // tap(res => console.log(`response observable interceptor`, res))
      tap(
        () => {},
        error => {
          if (error.status === 401) {
            this.router.navigate([this.loginUrl]);
          }
        }
      )
    );
    
    return next.handle(request);
  }

  getToken(): string {
    const token = this.storage.getToken();
    return `JWT ${token}`;
  }
}
