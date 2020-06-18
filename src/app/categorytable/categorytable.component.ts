import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { OrderPipe } from 'ngx-order-pipe';
import { filter } from 'rxjs/operators';
import { MomentService } from '../moment.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-categorytable',
  templateUrl: './categorytable.component.html',
  styleUrls: ['./categorytable.component.css']
})
export class CategorytableComponent implements OnInit {
  toolCat:any;
  _toolCatDat:any;
  p:number = 1;
  pageSize:number= 15;
  total:number;
  order: string='Tool_Name';
  reverse: boolean = false;
  term:any;
  
  constructor(private _service:DataService,
    private _orderPipe: OrderPipe,
    private ms:MomentService) { }
  
  ngOnInit() {

    

    this._toolCatDat = this._service.toolCategoryList().subscribe(data =>{
      this.toolCat = data;
    })



    var start = this.ms.moment().subtract(29, 'days');
    //console.log('My Start',start);
    
    var end = this.ms.moment();
//     var date1 = new Date();
//     console.log('TODAY',date1)
//     console.log('THIS IS THE MONTH',date1.getMonth()+1);
//     var quarter1 = Math.floor(((date1.getMonth()+1) / 3))
// console.log('QUAT',quarter1);
    
    this.callDateInitial(start, end)

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      
      }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Previous Quarter':[this.ms.moment().subtract(4,'month').startOf('month'),
          this.ms.moment().subtract(2,'month').endOf('month')],
          'Present Quarter':[this.ms.moment().subtract(1,'month').startOf('month'),
          this.ms.moment()],
          'Cumulative':[this.ms.moment([2017, 2 - 1,18]), 
          this.ms.moment()]
        }
    }, cb);

    cb(start, end);
    
    // (new Date()).getFullYear()




$('#reportrange').on('apply.daterangepicker', function(ev, picker) {
  this.callDateApply(ev, picker);
 
   
}.bind(this));


// }.bind(this),1000); 



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

  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  callDateInitial(start, end){
    let category:object;
    category={start_date:start.format('YYYY-MM-DD'),
   end_date:end.format('YYYY-MM-DD')};
  
   this._service.filterCategorytable(category).subscribe(data=>{
    this.toolCat = data;
  });
  }

  callDateApply(ev, picker){
    let category:object;
    category={start_date:picker.startDate.format('YYYY-MM-DD'),
   end_date:picker.endDate.format('YYYY-MM-DD')};
   this._service.filterCategorytable(category).subscribe(data=>{
    this.toolCat = data;
  });

  }
  

  ngOnDestroy(){
    this._toolCatDat.unsubscribe();
  }

}
