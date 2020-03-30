import { Injectable } from '@angular/core';
import {HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse } from'@angular/common/http';
import { Observable, from } from "rxjs";
import { map, catchError } from 'rxjs/operators';
// import{ErrorHandlerService } from'./error-handler.service';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService  implements  HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

    let request = req;
    request = req.clone({
      headers: request.headers.set("we", "s")
    })

    return next.handle(request)
  //   .catch((error: HttpErrorResponse) => {
  //     let data = {};
  //     data = {
  //         // reason: error && error.error.reason ? error.error.reason : '',
  //         status: error.status
  //     };
  //     // this.errorHandlerService.errorHandler(data)
  //     console.log("calling from interceptor" + error.status)
  //     return Observable.throwError(error);
  // })

  }
}
