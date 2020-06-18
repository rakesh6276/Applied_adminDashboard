import { Component, Input, OnInit, OnChanges, DoCheck } from '@angular/core';
//  import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public internalVal = null;
 
  constructor(private route:ActivatedRoute,private router:Router) { 

    // router.events.subscribe(event => {
    //   if(event instanceof NavigationStart) {
    //     if(!this.cookie.get('token')){
    //       this.router.navigate(['login']);
    //     }
    //     else{
    //       return;
    //     }
    //   }
    // });

    if(!localStorage.getItem('csrftoken')){
      console.log("NO TOKEN IN APP");
      this.router.navigate(['']);
    }
    
  }
 

  ngOnInit(){

    // this.router.navigate(['dashboard/bayhome']);

    
    // this.cookie.get('csrftoken')
  //   console.log(this.cookie.get('csrftoken'));
  //   if (this.cookie.get('csrftoken')) {
  //     this.log = !this.log;
  // } else {
  //     this.log = this.log;
  // }
    // console.log('CALL ALWAYS')
    // this._http.get('assets/json/config.json').subscribe(data=>{
    //   console.log(data);

    // })
    
  }
 


  // changeOfRoutes(){
  //   console.log("activate function called");
  //   if(!localStorage.getItem('csrftoken')){
  //     console.log("NO TOKEN IN APP");
  //     this.router.navigate(['']);
  //   }
  // }

  // logout(){
  //   this.cookie.deleteAll();
  //   this.router.navigate(['']);
  // }

  

  






  /*if (!$cookies.get('token')) {
      $rootScope.action = true;
  } else {
      $rootScope.action = false;
  }*/


}
