import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
@Injectable()
export class AuthGuard implements CanActivate {

constructor(private router:Router, private _service:DataService){

}

canActivate():boolean{

  if(this._service.loggedIn()){
    return true;
  }
  else{
    this.router.navigate(['']);
    return false;
  }
}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

}

