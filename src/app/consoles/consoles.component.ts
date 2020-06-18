import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';
import { DataService } from '../data.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})

export class ConsolesComponent implements OnInit,OnDestroy {
req1:any;
allconsoles:any;

settings = {
  delete: {
    confirmDelete: true,
  },
  edit: {
    confirmSave: true,
  },
  columns: {

    // id: {
    //   title: 'ID',
    // },



    

    name: {
      title: 'Console Name',
    },
    is_active: {
      title: 'Console Status',
      editor:{
        type: 'list',
        config: {
            list: [
              {value: 'TRUE', title: 'true'},
              {value: 'FALSE', title: 'false'},
            ]
        }
    },
    },
   
  },
};

  constructor(private http:HttpClient,private _consoleservice:DataService) {
   
   }

  ngOnInit() {

    this.req1 = this._consoleservice.getConsoles().subscribe(data =>{
      this.allconsoles = data as [any];
  })
return  this.allconsoles;
}

ngOnDestroy(){
  this.req1.unsubscribe();
}

onSaveConfirm(event) {
  if (window.confirm('Are you sure you want to save?')) {
    // event.newData['name'] += ' + added in code';
    event.confirm.resolve(event.newData);
    this._consoleservice.updateConsoles(event.newData).subscribe(data =>{
      })
  } else {
    event.confirm.reject();
  }
}


}




