import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cookie:CookieService,
    private route:ActivatedRoute,private router:Router) {
   
   }


  ngOnInit() {
   
   
  }

  logout(){
  
    localStorage.removeItem('csrftoken');
    localStorage.removeItem('expires_at');
    console.log("token deleted");
    this.router.navigate(['']);
  }
  

}
