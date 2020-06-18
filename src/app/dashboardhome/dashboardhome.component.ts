import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import {IConsoles, IOwners, AddTools, Swaptools, IToolCat} from "./consolesInterface"
import { ActivatedRoute, Router,Params } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalContentComponent } from '../tools/tools.component';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.css']
})
export class DashboardhomeComponent implements OnInit,OnDestroy {
  private req:any;
  toolList:any;
  console1:any;console2:any;console3:any;console4:any;console5:any;
  console6:any;console7:any;console8:any;nullconsole:any;
  _postsArray: any;
  toolid1:any;
  toolownerobj:any;
  _toolCategory:any;
  messageresponse:any;
  modalRef:BsModalRef;
  _alltoolsdata:any;

  saveEditable(value) {
  }

  constructor(private http:HttpClient, private _dashserve:DataService, 
    private route: ActivatedRoute, 
    private router: Router,
    private _modalservice:BsModalService) {
    
   }

   addtools: AddTools = new AddTools();
   swaptools:Swaptools = new Swaptools();

  ngOnInit() {
    this.toolid1 = this.route.snapshot.params['id'];
    
    this.callAlltools();
    

     this._dashserve.getConsoles().subscribe(data =>{
        this._postsArray = data as IConsoles[];
       
  })

     this._dashserve.getOwners().subscribe(data=>{
       this.toolownerobj = data;
      
     })

     this._dashserve.getToolCategory().subscribe(data=>{
       this._toolCategory = data;
      
     })

    //  this._dashserve.getTools().subscribe(data=>{
    //   console.log(data);
    //   this._alltoolsdata = data;
    //   console.log(this._alltoolsdata)
    // })

}

  callAlltools(){
    this.req = this._dashserve.getAllTools().subscribe(data => {
      this.toolList = data as [any];

      this.console1 = this.toolList.filter(data => {
        return data.bay==241 && data.is_active == true});
    
        this.console2 = this.toolList.filter(data => {
        return data.bay==256 && data.is_active == true});

        this.console3 = this.toolList.filter(data => {
        return data.bay==242 && data.is_active == true});

        this.console4 = this.toolList.filter(data => {
        return data.bay==245 && data.is_active == true});

        this.console5 = this.toolList.filter(data => {
        return data.bay==243 && data.is_active == true});

        this.console6 = this.toolList.filter(data => {
        return data.bay==255 && data.is_active == true});

        this.console7 = this.toolList.filter(data => {
        return data.bay==244 && data.is_active == true});

        this.console8 = this.toolList.filter(data => {
        return data.bay==258 && data.is_active == true});

        this.nullconsole = this.toolList.filter(data => {
        return data.bay==257 && data.is_active == false});

    });
  }

  saveNewTools(tooldata){
    this._dashserve.saveNewTools(tooldata).subscribe(data=>{
      this.messageresponse = data;
      this.openModal(this.messageresponse);
      this.callAlltools()
    })

  }

  swapTools(data){
    var temp1 = data.too1.bay;
    var temp2 = data.too1.bay_number;
    data.too1.bay = data.too2.bay;
    data.too1.bay_number = data.too2.bay_number;

    data.too2.bay = temp1;
    data.too2.bay_number = temp2;

    type baytool1 = {bay: number, 
      bay_number:string, id:number};

      type baytool2 = {bay: number, 
        bay_number:string, id:number};

        type baytoolarray = {too1:any,too2:any};

    var arr1: baytool1 = {bay: data.too1.bay,
        bay_number: data.too1.bay_number,id:data.too1.id}

        var arr2: baytool2 = {bay: data.too2.bay,
          bay_number: data.too2.bay_number,id:data.too2.id}

          var baytoolarrayObj:baytoolarray = {too1:arr1,too2:arr2};
    this._dashserve.swapTools(baytoolarrayObj).subscribe(data=>{
    })
   

  }

  openModal(resp){
    const initialState = {
      title: 'Response',
      messageresponse:resp
    };
    this.modalRef = this._modalservice.show(ModalContentComponent, {initialState});
    this.modalRef.content.closeBtnName = 'OK';
  }
 
  ngOnDestroy(){
    
    
  }

}
