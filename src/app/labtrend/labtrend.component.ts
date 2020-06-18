

import { Chart } from 'angular-highcharts';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { filter } from 'rxjs/operators';
import * as Highcharts from 'highcharts';
import { MomentService } from '../moment.service';
import { formatDate } from 'ngx-bootstrap/chronos';
import { count } from 'rxjs/operator/count';
//import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-labtrend',
  templateUrl: './labtrend.component.html',
  styleUrls: ['./labtrend.component.css']
})
export class LabtrendComponent implements OnInit {

  abcddd: any;
  start:any;
  end:any;
  date:any;
 
  

  constructor(private _service:DataService, private ms:MomentService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
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
    //    'Yesterday': [this.ms.moment().subtract(1, 'days'), this.ms.moment().subtract(1, 'days')],
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
  }
  
  callDateApply (ev ,picker){
    this._service.getlabtrends(picker).subscribe(data=>{
        this.abcddd=data;
        let count;
        
        count=Object.keys(this.abcddd.trend).length

      let _prdata = [],_madata=[],_iddata =[],_indata = [],_date1:any=[];
    // _date1.push(formatDate(new Date(this.abcddd.trend.date)));

     let idel:any;
     let manage:any;
     let install:any;
     let product:any;
      let counter:any=[];
      for (let i = 0; i < count; i++,counter++) {
        _date1.push((this.abcddd.trend[i].date.slice(0,10)));
       // counter =this.abcddd.trend[i].date;
        _iddata[i]=this.abcddd.trend[i].ID;
        _indata[i]=this.abcddd.trend[i].IN;
        _prdata[i]=this.abcddd.trend[i].PR;
        _madata[i]=this.abcddd.trend[i].MA;
        idel=this.abcddd.Chart.Idle;
        manage=this.abcddd.Chart.Maintainence;
        install=this.abcddd.Chart.Installation;
        product=this.abcddd.Chart.Productive;
       
      }
     // _date1.push(picker.startDate,picker.endDate)
      Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories:_date1
        },
        yAxis: {
            min: 0,
            title: {
                // text: 'Total fruit consumption'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>:   {point.percentage:.1f}%<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Idle',
            data:_iddata,
            color:'rgb(255, 153, 153)'
        }, {
            name: 'Installation',
            data: _indata,
            color:'rgb(255, 230, 128)'
        }, {
            name: 'Maintainence',
            data: _madata,
            color:'rgb(185, 215, 248)'
        },{
          name: 'Productive',
          data: _prdata,
          color:'rgb(199, 229, 150)'
      }]
    });
    Highcharts.chart('containers', {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
    
        "series": [
            {
                "name": "",
               
                "data": [
                    {
                        "name": "Idle",
                        "y": idel,
                        color:'rgb(255, 153, 153)'
                        
                    },
                    {
                        "name": "Installation",
                        "y": install,
                        color:'rgb(255, 230, 128)'
                    },
                    {
                        "name": "Maintainence",
                        "y": manage,
                        color:'rgb(185, 215, 248)'
                    },
                    {
                        "name": "Productive",
                        "y": product,
                        color:'rgb(199, 229, 150)'
                        
                    }
                
                ]
            }
        ],
     
    });
    // Highcharts.chart('container', {
    //     chart: {
    //         // plotBackgroundColor: null,
    //         // plotBorderWidth: null,
    //         // plotShadow: false,
    //         type: 'pie'
    //     },
    //     title: {
    //         text: 'Browser market shares at a specific website, 2014'
    //     },
    //     tooltip: {
    //         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //     },
    //     plotOptions: {
    //         pie: {
    //             allowPointSelect: true,
    //             cursor: 'pointer',
    //             //colors: pieColors,
    //             dataLabels: {
    //                 enabled: true,
    //                 format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
    //                 distance: -50,
                  
    //             }
    //         }
    //     },
    //     series: [{
    //         name: 'Share',
    //         data: [
    //             { name: 'Idel', percentage:'_iddate' },
    //             { name: 'Internet Explorer', y: 11.84 },
    //             { name: 'Firefox', y: 10.85 },
    //             { name: 'Edge', y: 4.67 },
    //             { name: 'Safari', y: 4.18 },
    //             { name: 'Other', y: 7.05 }
    //         ]
    //     }]
    // });
   
        
    })
    // let trend:object;
    //  this.datesdata=trend;
    // trend={startDate:picker.startDate.format('YYYY-MM-DD'),endDate:picker.endDate.format('YYYY-MM-DD')}
    // console.log(trend);
    // this.callDateApply1(trend);
    
    // let downloadurl = 'http://127.0.0.1:8000/api/export_tool_xls/?start_date=' + picker.startDate.format('YYYY-MM-DD') +'&end_date='+ picker.endDate.format('YYYY-MM-DD');
    // this._service.sendDateGetReprts(trend).subscribe(data=>{
    //   console.log(data);
    //   window.open(downloadurl);
    // })
  }

}
