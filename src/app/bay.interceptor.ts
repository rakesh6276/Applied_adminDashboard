// import { Injectable, NgModule} from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import 'rxjs/add/operator/do';
// @Injectable()
// export class HttpsRequestInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const dupReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin','https://my-json-server.typicode.com') });
//     return next.handle(dupReq);
//   }
// };

// export class InterceptorModule { }


import { NgModule, Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpRequest, HttpHandler, HttpEvent, HttpXsrfTokenExtractor, HttpInterceptor } from "@angular/common/http";

@Injectable()
export class XsrfInterceptor implements HttpInterceptor {

    constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headerName = 'X-XSRF-TOKEN';
        console.log("xsrf intercepter called");
        let requestToForward = req;
        let token = this.tokenExtractor.getToken() as string;
        console.log(token);
        if (token !== null) {
            requestToForward = req.clone({ setHeaders: {headerName: token } });
        }
        return next.handle(requestToForward);
    }

    


}