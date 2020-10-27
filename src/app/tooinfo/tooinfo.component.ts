import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalContentComponent } from '../tools/tools.component';
import { MomentService } from '../moment.service';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { formatDate } from 'ngx-bootstrap/chronos';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-tooinfo',
  templateUrl: './tooinfo.component.html',
  styleUrls: ['./tooinfo.component.css']
})
export class TooinfoComponent implements OnInit {
  toolIdGeneral:any;
  _toolUsersData:any;toolUsersdata:any;
  labUtilization1:any;
  _cummulative:any='';
  labUtilization2:any;
  _quaterly:any='';
  _toolname: any;
  _tooldata55:any;
  _tool55:any;
  too55:any;
  _projectname:any;
  idStatus:object;
  messageresponse:any;
  modalRef: BsModalRef;
  _toolImage:any;
  date:any;
  chart:any;
  _chartsSubscribedata:any;
  _trendsdata:any;
  clock:any;
  toolProjectsdata:any;
  toolPicture:any;
  mainToolId:any;
  


  constructor(private http:HttpClient,
     private route:ActivatedRoute,
     private router:Router,
    private _service:DataService,
    private _modalservice:BsModalService,
  private ms:MomentService) {

          }

  ngOnInit() {
    this.toolIdGeneral = this.route.snapshot.params['id'];

    this.sendIdGetToolPage(this.toolIdGeneral);

    // this.callDateApply = this.callDateApply.bind(this);
    // this.sendIdGetUsers(this.toolIdGeneral);
    

    // this._toolUsersData = this.http.get('assets/json/toolUsers.json').subscribe(data=>{
    //   this.toolUsersdata = data;
    // })
    // this.toolUsersdata = '';
    // this._service.sendIdGetUsers(this.toolIdGeneral).subscribe(data=>{
    //   this.toolUsersdata = data;
    // })

    // this.toolProjectsdata = '';
    // this._service.sendIdGetProjects(this.toolIdGeneral).subscribe(data=>{
    //   this.toolProjectsdata = data;
    // })


    // this._cummulative = '';
    //   this.labUtilization1 = this.http.get('assets/json/toolUtilization.json').subscribe(data=>{
    //     this._cummulative = data;
    //   })

    // this._cummulative = '';
    // this._service.getToolUtilization(this.toolIdGeneral).subscribe(data=>{
    //   this._cummulative = data;
    //   console.log('CUMULATIVE DATA',this._cummulative)
    // })

   

    // this._quaterly = '';
    // this._service.getQtrToolUtilization(this.toolIdGeneral).subscribe(data=>{
    //   this._quaterly = data;
    //   console.log('QUATERLY DATA',this._quaterly);
    // })


      // this._labData1 = '';
      // this._service.getToolUtilization(this.toolIdGeneral).subscribe(data =>{
      //   console.log(data);
      //   this._labData1 = data;
      //  })

       
      
  //     this._tool55 = data;
  //     console.log(this._tool55.current_project);
  //     // this._projectname=this._tool55.current_project
  //     console.log(this._tool55.status);
  //     this.too55 = this._tool55.status

  //   })



  // setTimeout(()=> {



    var start = this.ms.moment().subtract(29, 'days');
    var end = this.ms.moment();
    // this.callDateInitial(start, end)

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      
      }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [this.ms.moment(), this.ms.moment()],
           'Yesterday': [this.ms.moment().subtract(1, 'days'), this.ms.moment().subtract(1, 'days')],
           'Last 7 Days': [this.ms.moment().subtract(6, 'days'), this.ms.moment()],
           'Last 30 Days': [this.ms.moment().subtract(29, 'days'), this.ms.moment()],
           'This Month': [this.ms.moment().startOf('month'), this.ms.moment().endOf('month')],
           'Last Month': [this.ms.moment().subtract(1, 'month').startOf('month'), this.ms.moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);
    

// },1000);

// setTimeout(function(){





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

// this._chartsSubscribedata = this.http.get('assets/json/trends.json').subscribe(data=>{
//   this._trendsdata = data as [any];
//   let _prdata = [],_madata=[],_iddata =[],_indata = [],_date1=[];
//   this._trendsdata.trend.map(data => {
//     _prdata.push(data.PR)
//     _date1.push(formatDate(new Date(data.date)));
    
//   });
//   this._trendsdata.trend.map(data => {
//     _madata.push(data.MA)
//   });
//   this._trendsdata.trend.map(data => {
//     _iddata.push(data.ID)
//   });
//   this._trendsdata.trend.map(data => {
//     _indata.push(data.IN)
//   });
    
//   Highcharts.chart('container', {
//     chart: {
//         type: 'column',
//         animation:true,
//         style:{"fontSize":"30px"}
//     },
//     title: {
//         text: ''
//     },
//     xAxis: {
//         categories: _date1
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: ''
//         }
//     },
//     colors: [
//       "#C7E596","#b9d7f8","#ff9999","#ffe680"
//     ],
//     tooltip: {
//         pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
//         shared: true
//     },
//     plotOptions: {
//         column: {
//             stacking: 'percent'
//         }
//     },
//     series: [{
//         name: 'Productive',
//         data: _prdata
//     }, {
//         name: 'Maintenance',
//         data: _madata
//     }, {
//         name: 'Idle',
//         data: _iddata
//     },{
//       name: 'Installation',
//       data: _indata
//   }]
//   });
 
// })



setInterval(()=>{
  this.clock = Date.now();
},1000);

   }

   sendIdGetToolPage(id){
    this._service.sendIdGetToolPage(id).subscribe(data=>{
      this._tool55 = data[0];
      this._toolImage = data[0].image_url;
      this._toolname = data[0].name;
      this.too55 = data[0].status;
      this.mainToolId = data[0].id;
      this.toolUsersdata = '';
    this._service.sendIdGetUsers(data[0].id).subscribe(data=>{
      this.toolUsersdata = data;
    })

    this.toolProjectsdata = '';
    this._service.sendIdGetProjects(data[0].id).subscribe(data=>{
      this.toolProjectsdata = data;
    })

    
    this._service.getToolUtilization(data[0].id).subscribe(data=>{
      this._cummulative = data;
    })

   

    // this._quaterly = '';
    this._service.getQtrToolUtilization(data[0].id).subscribe(data=>{
      this._quaterly = data;
    })

    var start = this.ms.moment().subtract(29, 'days');
    var end = this.ms.moment();
    this.callDateInitial(start, end,data[0].id)



    })
  }

  onImageChange(e:FileList){
   console.log(e.item(0));
   this.toolPicture = e.item(0);
  }

  sendIdGetImage(){
    let formObj = new FormData();
    formObj.append('image',this.toolPicture);
    formObj.append('id',this.mainToolId);
    // let imageObj = {id:this.toolIdGeneral,image:this.toolPicture};
    this._service.sendIdGetImage(formObj).subscribe(data=>{
      let imgresponse = data;
      this.openModal(imgresponse);
      if(data == "Successfully uploaded"){
        this.sendIdGetToolPage(this.toolIdGeneral);
      }      
    })
  }


  changeStatus(currentid,clickstatus){
    
    type MyArrayType = {id: number, status: string};

    var arr: MyArrayType = 
      {id: currentid.id, status: clickstatus}
    ;
    this._service.changestatus(arr).subscribe(data=>{
      this.sendIdGetToolPage(this.toolIdGeneral);
    })
    
  
}

openModal(resp){
  const initialState = {
    title: 'Image Upload',
    messageresponse:resp
  };
  this.modalRef = this._modalservice.show(ModalContentComponent, {initialState});
  this.modalRef.content.closeBtnName = 'OK';
}


callDateApply(ev, picker){
  let trend:object;
 trend={startDate:picker.startDate.format('YYYY-MM-DD'),
 endDate:picker.endDate.format('YYYY-MM-DD'),id:this.mainToolId};

 this._service.sendDateGetTrends(trend).subscribe(data=>{
  this._trendsdata = data;
  let _prdata = [],_madata=[],_iddata =[],_indata = [],_date1=[];
  this._trendsdata.trend.map(data => {
    _prdata.push(data.PR)
    _date1.push(data.date.slice(0,10));
    
  });
  this._trendsdata.trend.map(data => {
    _madata.push(data.MA)
  });
  this._trendsdata.trend.map(data => {
    _iddata.push(data.ID)
  });
  this._trendsdata.trend.map(data => {
    _indata.push(data.IN)
  });
  Highcharts.chart('container', {
    chart: {
        type: 'column',
        animation:true,
        style:{"fontSize":"30px"}
    },
    title: {
        text: ''
    },
    xAxis: {
      categories: _date1,
      tickInterval: 4
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    colors: [
      "#C7E596","#b9d7f8","#ff9999","#ffe680"
    ],
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        },
        series: {
          animation: {
              duration: 200,
              
          }
      }
        
    },

    credits: {
      enabled: false
   },

    series: [{
        name: 'Productive',
        data: _prdata
    }, {
        name: 'Maintenance',
        data: _madata
    }, {
        name: 'Idle',
        data: _iddata
    },{
      name: 'Installation',
      data: _indata
  }]
  });
 })

 }



 callDateInitial(start, end, mainId){
  let trend:object;
 trend={startDate:start.format('YYYY-MM-DD'),
 endDate:end.format('YYYY-MM-DD'),id:mainId};

 this._service.sendDateGetTrends(trend).subscribe(data=>{
  this._trendsdata = data;
  let _prdata = [],_madata=[],_iddata =[],_indata = [],_date1=[];
  this._trendsdata.trend.map(data => {
    _prdata.push(data.PR)
    _date1.push(data.date.slice(0,10));
    
  });
  this._trendsdata.trend.map(data => {
    _madata.push(data.MA)
  });
  this._trendsdata.trend.map(data => {
    _iddata.push(data.ID)
  });
  this._trendsdata.trend.map(data => {
    _indata.push(data.IN)
  });
  Highcharts.chart('container', {
    chart: {
        type: 'column',
        animation:true,
        style:{"fontSize":"30px"}
    },
    title: {
        text: ''
    },
    xAxis: {
      categories: _date1,
      tickInterval: 4
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    colors: [
      "#C7E596","#b9d7f8","#ff9999","#ffe680"
    ],
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },

    credits: {
      enabled: false
   },
   

    series: [{
        name: 'Productive',
        data: _prdata
    }, {
        name: 'Maintenance',
        data: _madata
    }, {
        name: 'Idle',
        data: _iddata
    },{
      name: 'Installation',
      data: _indata
  }]
  });
 })

}

   ngOnDestroy(){
    //  this._toolUsersData.unsubscribe();
    
   }


 


}
