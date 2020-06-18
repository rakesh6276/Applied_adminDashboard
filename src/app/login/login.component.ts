import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup,
  FormControl } from '@angular/forms';
import { Signup } from './signup';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalContentComponent } from '../tools/tools.component';
import { CookieXSRFStrategy } from '@angular/http';
import { moment } from 'ngx-bootstrap/chronos/test/chain';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageSource:any;
  currentMessage:any;
  token:any;
  messageresponse:string;
  modalRef: BsModalRef;
  constructor(private _logindata:DataService,private route:ActivatedRoute,
    private router:Router,private cookie:CookieService,
    private _modalservice:BsModalService) { 
    
  }
  
  login: Signup = new Signup();


  ngOnInit() {
  }

  

  submit(data){
    console.log(data);
    this._logindata.callLogin(data).subscribe(data =>{
      this.token = data;
      if (this.token.token) {
        const expiresAt = moment().add(this.token.expiresIn,'second');

        localStorage.setItem('csrftoken', this.token.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        // this.cookie.set("csrftoken",this.token.token);
        console.log('local token',localStorage.getItem('csrftoken'))
        this.router.navigate(['dashboard/bayhome']);
      }
    }, (err)=> {
        this.messageresponse = "Please check your email or password";
        this.openModal(this.messageresponse);
    })
  }


  

  openModal(resp){
    const initialState = {
      title: 'Login',
      messageresponse:resp
    };
    this.modalRef = this._modalservice.show(ModalContentComponent, {initialState});
    this.modalRef.content.closeBtnName = 'OK';
  }

 

}

