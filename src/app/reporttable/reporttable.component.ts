import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { filter } from 'rxjs/operators';
import { MomentService } from '../moment.service';
import { formatDate } from 'ngx-bootstrap/chronos';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-reporttable',
  templateUrl: './reporttable.component.html',
  styleUrls: ['./reporttable.component.css']
})
export class ReporttableComponent implements OnInit {
  url_report: string;
  http: any;
  reportDat:any;
  _dashserve:any;
  _toolCategory:any;
  toolIdGeneral:any;
  date:any;
  datesdata:any;
  start:any;
  end:any;
  _toolsid :any;
  toolsid :any;
  p:number = 1;
  pageSize:number= 10;
  total:number;
  order: string='Tool_Name';
  reverse: boolean = false;
  term:any;
  tool:any;
  
 

  constructor(private _service:DataService,private _orderPipe: OrderPipe, private ms:MomentService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    // tools name array
    this._toolsid =this._service.getAllTools().subscribe(data =>{
      this.toolsid=data;
     
    })
    // tool name array end
    this.toolIdGeneral = this.route.snapshot.params['id'];

    // this.sendIdGetToolPage(this.toolIdGeneral)


   // this.messageSuccess = true;

    setTimeout(()=>{    //<<<---    using ()=> syntax
          // this.messageSuccess = false;
          this.callDateApply;
          $('#reportrange').on('apply.daterangepicker');
          
      }, 3000);



setTimeout(()=> {
    this.start = this.ms.moment().subtract(29, 'days');
    this.end = this.ms.moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
       
      }

    $('#reportrange').daterangepicker({
        startDate: this.start,
        endDate: this.end,
        ranges: {
          //  'Today': [this.ms.moment(), this.ms.moment()],
           'Yesterday': [this.ms.moment().subtract(1, 'days'), this.ms.moment().subtract(1, 'days')],
           'Last 7 Days': [this.ms.moment().subtract(6, 'days'), this.ms.moment()],
           'Last 30 Days': [this.ms.moment().subtract(29, 'days'), this.ms.moment()],
           'This Month': [this.ms.moment().startOf('month'), this.ms.moment().endOf('month')],
          //  'Last Month': [this.ms.moment().subtract(1, 'month').startOf('month'), this.ms.moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(this.start, this.end);
    
},1000);

setTimeout(function() {
$('#reportrange').on('apply.daterangepicker', function(ev, picker) {
  this.callDateApply(ev, picker);
  // this.callDateApply2(ev,picker);
  
   
}.bind(this));
}.bind(this),1000);


function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}


// project ccode


setTimeout(()=>{    //<<<---    using ()=> syntax
  // this.messageSuccess = false;
  this.callDateApply2;
  $('#reportrange1').on('apply.daterangepicker');
  
}, 3000);



setTimeout(()=> {
this.start = this.ms.moment().subtract(29, 'days');
this.end = this.ms.moment();

function cb(start, end) {
$('#reportrange1 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));

}

$('#reportrange1').daterangepicker({
startDate: this.start,
endDate: this.end,
ranges: {
  //  'Today': [this.ms.moment(), this.ms.moment()],
   'Yesterday': [this.ms.moment().subtract(1, 'days'), this.ms.moment().subtract(1, 'days')],
   'Last 7 Days': [this.ms.moment().subtract(6, 'days'), this.ms.moment()],
   'Last 30 Days': [this.ms.moment().subtract(29, 'days'), this.ms.moment()],
   'This Month': [this.ms.moment().startOf('month'), this.ms.moment().endOf('month')],
  //  'Last Month': [this.ms.moment().subtract(1, 'month').startOf('month'), this.ms.moment().subtract(1, 'month').endOf('month')]
}
}, cb);

cb(this.start, this.end);

},1000);

setTimeout(function() {
$('#reportrange1').on('apply.daterangepicker', function(ev, picker) {

this.callDateApply2(ev,picker);


}.bind(this));
}.bind(this),1000);


function formatDate1(date) {
var monthNames = [
"January", "February", "March",
"April", "May", "June", "July",
"August", "September", "October",
"November", "December"
];

var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();

return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

// end of project code


// start of tools name

setTimeout(()=>{    //<<<---    using ()=> syntax
  // this.messageSuccess = false;
  this.callDateApply4;
  $('#reportrange2').on('apply.daterangepicker');
  
}, 3000);



setTimeout(()=> {
this.start = this.ms.moment().subtract(29, 'days');
this.end = this.ms.moment();

function cb(start, end) {
$('#reportrange2 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));

}

$('#reportrange2').daterangepicker({
startDate: this.start,
endDate: this.end,
ranges: {
  //  'Today': [this.ms.moment(), this.ms.moment()],
   'Yesterday': [this.ms.moment().subtract(1, 'days'), this.ms.moment().subtract(1, 'days')],
   'Last 7 Days': [this.ms.moment().subtract(6, 'days'), this.ms.moment()],
   'Last 30 Days': [this.ms.moment().subtract(29, 'days'), this.ms.moment()],
   'This Month': [this.ms.moment().startOf('month'), this.ms.moment().endOf('month')],
  //  'Last Month': [this.ms.moment().subtract(1, 'month').startOf('month'), this.ms.moment().subtract(1, 'month').endOf('month')]
}
}, cb);

cb(this.start, this.end);

},1000);

setTimeout(function() {
$('#reportrange2').on('apply.daterangepicker', function(ev, picker) {

this.callDateApply4(ev,picker);


}.bind(this));
}.bind(this),1000);


function formatDate2(date) {
var monthNames = [
"January", "February", "March",
"April", "May", "June", "July",
"August", "September", "October",
"November", "December"
];

var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();

return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
// end of tool name

  }
  
callDateApply (ev ,picker){
  let trend:object;
   this.datesdata=trend;
  trend={startDate:picker.startDate.format('YYYY-MM-DD'),endDate:picker.endDate.format('YYYY-MM-DD')}
  this.callDateApply1(trend);
  
  // let downloadurl = 'http://152.135.122.61:8871/api/export_tool_xls/?start_date=' + picker.startDate.format('YYYY-MM-DD') +'&end_date='+ picker.endDate.format('YYYY-MM-DD');
  // this._service.sendDateGetReprts(trend).subscribe(data=>{
  //   window.open(downloadurl);
  // })
}
callDateApply2(ev ,picker){
  let trend:object;
   this.datesdata=trend;
  trend={startDate:picker.startDate.format('YYYY-MM-DD'),endDate:picker.endDate.format('YYYY-MM-DD')}
  this.callDateApply3(trend);
}
callDateApply4(ev ,picker){
  let trend:object;
  let id:number;
   this.datesdata=trend;
  trend={startDate:picker.startDate.format('YYYY-MM-DD'),endDate:picker.endDate.format('YYYY-MM-DD')}
  this.callDateApply5(trend,id);
}

callDateApply1 (trend){
   if(!trend){
     let trend2:object;
     trend2={startDate:this.start.format('YYYY-MM-DD'),endDate:this.end.format('YYYY-MM-DD')}
     let downloadurl1 = 'http://152.135.122.61:8871/api/export_tool_xls/?start_date=' + this.start.format('YYYY-MM-DD') +'&end_date='+ this.end.format('YYYY-MM-DD');
     window.open(downloadurl1);
    //  this._service.sendDateGetReprts(trend2).subscribe(data=>{
    //   //window.open(downloadurl1);
    // })
  }
  else{
    // let downloadurl2 = 'http://152.135.122.61:8871/api/export_tool_xls/?start_date=' + trend.startDate +'&end_date='+ trend.endDate;
    let downloadurl2 = 'http://152.135.122.61:8871/api/export_tool_xls/?start_date=' + trend.startDate +'&end_date='+ trend.endDate;
    window.open(downloadurl2);
    // this._service.sendDateGetReprts(trend).subscribe(data=>{
    //   //window.open(downloadurl2);
    // })
  //   let trend:object;
//  trend={startDate:picker.startDate.format('YYYY-MM-DD'),
//  endDate:picker.endDate.format('YYYY-MM-DD'),id:this.toolIdGeneral};


}
}


callDateApply3(trend){
   if(!trend){
     let trend2:object;
     trend2={startDate:this.start.format('YYYY-MM-DD'),endDate:this.end.format('YYYY-MM-DD')}
     let downloadurl1 = 'http://152.135.122.61:8871/api/export_project_xls/?start_date=' + this.start.format('YYYY-MM-DD') +'&end_date='+ this.end.format('YYYY-MM-DD');
     window.open(downloadurl1);
    //  this._service.sendDateGetReprts(trend2).subscribe(data=>{
    //   //window.open(downloadurl1);
    // })
  }
  else{
    // let downloadurl2 = 'http://152.135.122.61:8871/api/export_tool_xls/?start_date=' + trend.startDate +'&end_date='+ trend.endDate;
    let downloadurl2 = 'http://152.135.122.61:8871/api/export_project_xls/?start_date=' + trend.startDate +'&end_date='+ trend.endDate;
    window.open(downloadurl2);
    }
  }


  callDateApply5(trend,id){
     if(!trend){
       let trend2:object;
       trend2={startDate:this.start.format('YYYY-MM-DD'),endDate:this.end.format('YYYY-MM-DD')}
       console.log("date",trend2)
       let downloadurl1 = 'http://152.135.122.61:8871/api/export_tools/'+ id +'?start_date=' + this.start.format('YYYY-MM-DD') +'&end_date='+ this.end.format('YYYY-MM-DD');
      //  console.log("data", downloadurl2)
       window.open(downloadurl1);
      //  this._service.sendDateGetReprts(trend2).subscribe(data=>{
      //   //window.open(downloadurl1);
      // })
    }
    else{
       let downloadurl2 = 'http://152.135.122.61:8871/api/export_tool_xls/?start_date=' + trend.startDate +'&end_date='+ trend.endDate;
      console.log("data", downloadurl2)
      // let downloadurl2 = 'http://152.135.122.61:8871/api/export_tools/'+ id +'?start_date=' + this.start.format('YYYY-MM-DD') +'&end_date='+ this.end.format('YYYY-MM-DD');
      window.open(downloadurl2);
      }
    }


  ngOnDestroy(){
    
  }
}
