import { Injectable } from "@angular/core";
import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { catchError, Observable, of, scheduled, throwError } from "rxjs";
import { TokenStorageService } from "../services/token-storage.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.tokenStorageService.getToken();

    if (token) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) })
    }
    return next.handle(authReq).pipe(catchError((error: HttpErrorResponse, caught: Observable<HttpEvent<unknown>>) => {
        if (error.status === 401) {
          this.tokenStorageService.signOut();
        }
      return throwError(() => error);
      }
    ));
  }
}

export const authInterceptorProviders = [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ];
