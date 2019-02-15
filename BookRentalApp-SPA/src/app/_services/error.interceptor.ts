import { Injectable } from '../../../node_modules/@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { catchError } from '../../../node_modules/rxjs/operators';

@Injectable()
export class ErrorInterCeptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {
                    const applicationerror = error.headers.get('Application-Error');
                    if (applicationerror) {
                        return throwError(applicationerror);
                    }
                    const servererror = error.error;
                    let modelstaterrors = '';
                    if (servererror && typeof servererror === 'object') {
                        for (const key in servererror) {
                            if (servererror[key]) {
                                modelstaterrors += servererror[key];
                            }
                        }
                    }

                    return throwError(modelstaterrors || servererror || 'Server Error');
                }
            })
        );
    }
}

export const ErrorInterCeptorProvide = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterCeptor,
    multi: true
};
