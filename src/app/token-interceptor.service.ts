import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req, next){
    let authservice = this.injector.get(DataService);
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:`JWT ${authservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }

}
