import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-toolcatagory',
  templateUrl: './toolcatagory.component.html',
  styleUrls: ['./toolcatagory.component.css']
})
export class ToolcatagoryComponent implements OnInit {
  
  [x: string]:any;
//   Tool_Name:any;
//   clock:any;
//   _cumulativeLab:any;
//   _quaterLab:any;
  
//   idToken = localStorage.getItem('csrftoken');
apiRoot: string = "http://152.135.122.61:8871";
//  apiRoot: string = "http://152.135.122.61:8871";
//options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.cookie.get('csrftoken')}) };
  
  constructor(private _data1:DataService,private http:HttpClient,) { }
//   options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.idToken})};

  ngOnInit() {

    setInterval(()=>{
        this.clock = Date.now();
      },1000);
    
    this.http.get(this.apiRoot+'/api/tool_category_data/31/').subscribe(data =>{
      this._labListed1 = data as [any];
      if (this._labListed1.Tool_efficiency === false) {
        $('#lab1').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed1.Tool_efficiency === true) {
        $('#lab1').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab1").hover(()=>{
        if (this._labListed1.Tool_Category === "Qualifications") {
            $('#lab1').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed1.Tool_Category === "Field Issues") {
            $('#lab1').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed1.Tool_Category === "Process") {
            $('#lab1').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed1.Tool_efficiency === false) {
            $('#lab1').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed1.Tool_efficiency === true) {
            $('#lab1').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    // this.labData2 = this.http.get(this.apiRoot+'/api/tool_category_data/99/').subscribe(data =>{
    //   console.log(data);
    //   this._labListed2 = data as [any];
    //   if (this._labListed2.Tool_efficiency === false) {
    //     $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
    //   }
    //   else if (this._labListed2.Tool_efficiency === true) {
    //     $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
    //   }

    //   $("#lab2").hover(()=>{
    //     if (this._labListed2.Tool_Category === "Qualifications") {
    //         $('#lab2').css("fill", "rgb(125, 109, 196)");
    //     }
    //     else if (this._labListed2.Tool_Category === "Field Issues") {
    //         $('#lab2').css("fill", "rgb(255, 193, 203)");

    //     }
    //     else if (this._labListed2.Tool_Category === "Process") {
    //         $('#lab2').css({fill: "#aee9ca"});
    //     }
    // },
    //  ()=> {
    //     if (this._labListed2.Tool_efficiency === false) {
    //         $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed2.Tool_efficiency === true) {
    //         $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    // });

    // })

    this.http.get(this.apiRoot+'/api/tool_category_data/99/').subscribe(data =>{
        this._labListed2 = data as [any];
        if (this._labListed2.Tool_efficiency === false) {
          $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed2.Tool_efficiency === true) {
          $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab2").hover(()=>{
          if (this._labListed2.Tool_Category === "Qualifications") {
              $('#lab2').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed2.Tool_Category === "Field Issues") {
              $('#lab2').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed2.Tool_Category === "Process") {
              $('#lab2').css({fill: "#aee9ca"});
          }
        },
       ()=> {
          if (this._labListed2.Tool_efficiency === false) {
              $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed2.Tool_efficiency === true) {
              $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })

    this.http.get(this.apiRoot+'/api/tool_category_data/99/').subscribe(data =>{
      this._labListed3 = data as [any];
      if (this._labListed3.Tool_efficiency === false) {
        $('#lab3').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed3.Tool_efficiency === true) {
        $('#lab3').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab3").hover(()=>{
        if (this._labListed3.Tool_Category === "Qualifications") {
            $('#lab3').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed3.Tool_Category === "Field Issues") {
            $('#lab3').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed3.Tool_Category === "Process") {
            $('#lab3').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed3.Tool_efficiency === false) {
            $('#lab3').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed3.Tool_efficiency === true) {
            $('#lab3').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/66/').subscribe(data =>{
      this._labListed4 = data as [any];
      if (this._labListed4.Tool_efficiency === false) {
        $('#lab4').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed4.Tool_efficiency === true) {
        $('#lab4').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab4").hover(()=>{
        if (this._labListed4.Tool_Category === "Qualifications") {
            $('#lab4').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed4.Tool_Category === "Field Issues") {
            $('#lab4').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed4.Tool_Category === "Process") {
            $('#lab4').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed4.Tool_efficiency === false) {
            $('#lab4').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed4.Tool_efficiency === true) {
            $('#lab4').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    

    // this.http.get(this.apiRoot+'/api/tool_category_data/74/').subscribe(data =>{
    //     console.log(data);
    //     this._labListed5 = data as [any];
    //     if (this._labListed5.Tool_efficiency === false) {
    //       $('#lab5').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed5.Tool_efficiency === true) {
    //       $('#lab5').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab5").hover(()=>{
    //       if (this._labListed5.Tool_Category === "Qualifications") {
    //           $('#lab5').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed5.Tool_Category === "Field Issues") {
    //           $('#lab5').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed5.Tool_Category === "Process") {
    //           $('#lab5').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed5.Tool_efficiency === false) {
    //           $('#lab5').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed5.Tool_efficiency === true) {
    //           $('#lab5').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
  
    //   })
  
  
//     this.http.get(this.apiRoot+'/api/tool_category_data/129/').subscribe(data =>{
//       console.log(data);
//       this._labListed6 = data as [any];
//       if (this._labListed6.Tool_efficiency === false) {
//         $('#lab6').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed6.Tool_efficiency === true) {
//         $('#lab6').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }

//       $("#lab6").hover(()=>{
//         if (this._labListed6.Tool_Category === "Qualifications") {
//             $('#lab6').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed6.Tool_Category === "Field Issues") {
//             $('#lab6').css("fill", "rgb(255, 193, 203)");

//         }
//         else if (this._labListed6.Tool_Category === "Process") {
//             $('#lab6').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed6.Tool_efficiency === false) {
//             $('#lab6').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed6.Tool_efficiency === true) {
//             $('#lab6').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });

//     })


    this.http.get(this.apiRoot+'/api/tool_category_data/109/').subscribe(data =>{
      this._labListed7 = data as [any];
      if (this._labListed7.Tool_efficiency === false) {
        $('#lab7').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed7.Tool_efficiency === true) {
        $('#lab7').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab7").hover(()=>{
        if (this._labListed7.Tool_Category === "Qualifications") {
            $('#lab7').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed7.Tool_Category === "Field Issues") {
            $('#lab7').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed7.Tool_Category === "Process") {
            $('#lab7').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed7.Tool_efficiency === false) {
            $('#lab7').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed7.Tool_efficiency === true) {
            $('#lab7').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/100/').subscribe(data =>{
      this._labListed8 = data as [any];
      if (this._labListed8.Tool_efficiency === false) {
        $('#lab8').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed8.Tool_efficiency === true) {
        $('#lab8').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab8").hover(()=>{
        if (this._labListed8.Tool_Category === "Qualifications") {
            $('#lab8').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed8.Tool_Category === "Field Issues") {
            $('#lab8').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed8.Tool_Category === "Process") {
            $('#lab8').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed8.Tool_efficiency === false) {
            $('#lab8').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed8.Tool_efficiency === true) {
            $('#lab8').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    // this.http.get(this.apiRoot+'/api/tool_category_data/75/').subscribe(data =>{
    //   this._labListed9 = data as [any];
    //   if (this._labListed9.Tool_efficiency === false) {
    //     $('#lab9').css({fill: "rgba(239, 9, 9, 0.78)"});
    //   }
    //   else if (this._labListed9.Tool_efficiency === true) {
    //     $('#lab9').css({fill: "rgba(140, 192, 19, 0.88)"});
    //   }

    //   $("#lab9").hover(()=>{
    //     if (this._labListed9.Tool_Category === "Qualifications") {
    //         $('#lab9').css("fill", "rgb(125, 109, 196)");
    //     }
    //     else if (this._labListed9.Tool_Category === "Field Issues") {
    //         $('#lab9').css("fill", "rgb(255, 193, 203)");

    //     }
    //     else if (this._labListed9.Tool_Category === "Process") {
    //         $('#lab9').css({fill: "#aee9ca"});
    //     }
    // },
    //  ()=> {
    //     if (this._labListed9.Tool_efficiency === false) {
    //         $('#lab9').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed9.Tool_efficiency === true) {
    //         $('#lab9').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    // });

    // })


    this.http.get(this.apiRoot+'/api/tool_category_data/18/').subscribe(data =>{
      this._labListed10 = data as [any];
      if (this._labListed10.Tool_efficiency === false) {
        $('#lab10').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed10.Tool_efficiency === true) {
        $('#lab10').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab10").hover(()=>{
        if (this._labListed10.Tool_Category === "Qualifications") {
            $('#lab10').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed10.Tool_Category === "Field Issues") {
            $('#lab10').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed10.Tool_Category === "Process") {
            $('#lab10').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed10.Tool_efficiency === false) {
            $('#lab10').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed10.Tool_efficiency === true) {
            $('#lab10').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    // this.http.get(this.apiRoot+'/api/tool_category_data/26/').subscribe(data =>{
    //     console.log(data);
    //     this._labListed11a = data as [any];
    //     if (this._labListed11a.Tool_efficiency === false) {
    //       $('#lab11a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed11a.Tool_efficiency === true) {
    //       $('#lab11a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab11a").hover(()=>{
    //       if (this._labListed11a.Tool_Category === "Qualifications") {
    //           $('#lab11a').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed11a.Tool_Category === "Field Issues") {
    //           $('#lab11a').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed11a.Tool_Category === "Process") {
    //           $('#lab11a').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed11a.Tool_efficiency === false) {
    //           $('#lab11a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed11a.Tool_efficiency === true) {
    //           $('#lab11a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
  
    //   })
  
      this.http.get(this.apiRoot+'/api/tool_category_data/26/').subscribe(data =>{
          this._labListed11b = data as [any];
          if (this._labListed11b.Tool_efficiency === false) {
            $('#lab11b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed11b.Tool_efficiency === true) {
            $('#lab11b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
    
          $("#lab11b").hover(()=>{
            if (this._labListed11b.Tool_Category === "Qualifications") {
                $('#lab11b').css("fill", "rgb(125, 109, 196)");
            }
            else if (this._labListed11b.Tool_Category === "Field Issues") {
                $('#lab11b').css("fill", "rgb(255, 193, 203)");
    
            }
            else if (this._labListed11b.Tool_Category === "Process") {
                $('#lab11b').css({fill: "#aee9ca"});
            }
        },
         ()=> {
            if (this._labListed11b.Tool_efficiency === false) {
                $('#lab11b').css({fill: "rgba(239, 9, 9, 0.78)"});
            }
            else if (this._labListed11b.Tool_efficiency === true) {
                $('#lab11b').css({fill: "rgba(140, 192, 19, 0.88)"});
            }
        });
    
        })
  


    this.http.get(this.apiRoot+'/api/tool_category_data/50/').subscribe(data =>{
      this._labListed12 = data as [any];
      if (this._labListed12.Tool_efficiency === false) {
        $('#lab12').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed12.Tool_efficiency === true) {
        $('#lab12').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab12").hover(()=>{
        if (this._labListed12.Tool_Category === "Qualifications") {
            $('#lab12').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed12.Tool_Category === "Field Issues") {
            $('#lab12').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed12.Tool_Category === "Process") {
            $('#lab12').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed12.Tool_efficiency === false) {
            $('#lab12').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed12.Tool_efficiency === true) {
            $('#lab12').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/38/').subscribe(data =>{
      this._labListed13 = data as [any];
      if (this._labListed13.Tool_efficiency === false) {
        $('#lab13').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed13.Tool_efficiency === true) {
        $('#lab13').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab13").hover(()=>{
        if (this._labListed13.Tool_Category === "Qualifications") {
            $('#lab13').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed13.Tool_Category === "Field Issues") {
            $('#lab13').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed13.Tool_Category === "Process") {
            $('#lab13').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed13.Tool_efficiency === false) {
            $('#lab13').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed13.Tool_efficiency === true) {
            $('#lab13').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/27/').subscribe(data =>{
      this._labListed14 = data as [any];
      if (this._labListed14.Tool_efficiency === false) {
        $('#lab14').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed14.Tool_efficiency === true) {
        $('#lab14').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab14").hover(()=>{
        if (this._labListed14.Tool_Category === "Qualifications") {
            $('#lab14').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed14.Tool_Category === "Field Issues") {
            $('#lab14').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed14.Tool_Category === "Process") {
            $('#lab14').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed14.Tool_efficiency === false) {
            $('#lab14').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed1.Tool_efficiency === true) {
            $('#lab14').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/86/').subscribe(data =>{
      this._labListed15 = data as [any];
      if (this._labListed15.Tool_efficiency === false) {
        $('#lab15').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed15.Tool_efficiency === true) {
        $('#lab15').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab15").hover(()=>{
        if (this._labListed15.Tool_Category === "Qualifications") {
            $('#lab15').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed15.Tool_Category === "Field Issues") {
            $('#lab15').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed15.Tool_Category === "Process") {
            $('#lab15').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed15.Tool_efficiency === false) {
            $('#lab15').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed15.Tool_efficiency === true) {
            $('#lab15').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/55/').subscribe(data =>{
      this._labListed16 = data as [any];
      if (this._labListed16.Tool_efficiency === false) {
        $('#lab16').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed16.Tool_efficiency === true) {
        $('#lab16').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab16").hover(()=>{
        if (this._labListed16.Tool_Category === "Qualifications") {
            $('#lab16').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed16.Tool_Category === "Field Issues") {
            $('#lab16').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed16.Tool_Category === "Process") {
            $('#lab16').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed16.Tool_efficiency === false) {
            $('#lab16').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed16.Tool_efficiency === true) {
            $('#lab16').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/53/').subscribe(data =>{
      this._labListed17 = data as [any];
      if (this._labListed17.Tool_efficiency === false) {
        $('#lab17').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed17.Tool_efficiency === true) {
        $('#lab17').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab17").hover(()=>{
        if (this._labListed17.Tool_Category === "Qualifications") {
            $('#lab17').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed17.Tool_Category === "Field Issues") {
            $('#lab17').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed17.Tool_Category === "Process") {
            $('#lab17').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed17.Tool_efficiency === false) {
            $('#lab17').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed17.Tool_efficiency === true) {
            $('#lab17').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/54/').subscribe(data =>{
      this._labListed18 = data as [any];
      if (this._labListed18.Tool_efficiency === false) {
        $('#lab18').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed18.Tool_efficiency === true) {
        $('#lab18').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab18").hover(()=>{
        if (this._labListed18.Tool_Category === "Qualifications") {
            $('#lab18').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed18.Tool_Category === "Field Issues") {
            $('#lab18').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed18.Tool_Category === "Process") {
            $('#lab18').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed18.Tool_efficiency === false) {
            $('#lab18').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed18.Tool_efficiency === true) {
            $('#lab18').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/72/').subscribe(data =>{
      this._labListed19 = data as [any];
      if (this._labListed19.Tool_efficiency === false) {
        $('#lab19').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed19.Tool_efficiency === true) {
        $('#lab19').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab19").hover(()=>{
        if (this._labListed19.Tool_Category === "Qualifications") {
            $('#lab19').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed19.Tool_Category === "Field Issues") {
            $('#lab19').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed19.Tool_Category === "Process") {
            $('#lab19').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed19.Tool_efficiency === false) {
            $('#lab19').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed19.Tool_efficiency === true) {
            $('#lab19').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


//  this.http.get(this.apiRoot+'/api/tool_category_data/55/').subscribe(data =>{
//       console.log(data);
//       this._labListed20 = data as [any];
//       if (this._labListed20.Tool_efficiency === false) {
//         $('#lab20').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed20.Tool_efficiency === true) {
//         $('#lab20').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }

//       $("#lab20").hover(()=>{
//         if (this._labListed20.Tool_Category === "Qualifications") {
//             $('#lab20').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed20.Tool_Category === "Field Issues") {
//             $('#lab20').css("fill", "rgb(255, 193, 203)");

//         }
//         else if (this._labListed20.Tool_Category === "Process") {
//             $('#lab20').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed20.Tool_efficiency === false) {
//             $('#lab20').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed20.Tool_efficiency === true) {
//             $('#lab20').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });

//     })


    this.http.get(this.apiRoot+'/api/tool_category_data/58/').subscribe(data =>{
      this._labListed21 = data as [any];
      if (this._labListed21.Tool_efficiency === false) {
        $('#lab21').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed21.Tool_efficiency === true) {
        $('#lab21').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab21").hover(()=>{
        if (this._labListed21.Tool_Category === "Qualifications") {
            $('#lab21').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed21.Tool_Category === "Field Issues") {
            $('#lab21').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed21.Tool_Category === "Process") {
            $('#lab21').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed21.Tool_efficiency === false) {
            $('#lab21').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed21.Tool_efficiency === true) {
            $('#lab21').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/52/').subscribe(data =>{
      this._labListed22 = data as [any];
      if (this._labListed22.Tool_efficiency === false) {
        $('#lab22').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed22.Tool_efficiency === true) {
        $('#lab22').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab22").hover(()=>{
        if (this._labListed22.Tool_Category === "Qualifications") {
            $('#lab22').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed22.Tool_Category === "Field Issues") {
            $('#lab22').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed22.Tool_Category === "Process") {
            $('#lab22').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed22.Tool_efficiency === false) {
            $('#lab22').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed22.Tool_efficiency === true) {
            $('#lab22').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


//     this.http.get(this.apiRoot+'/api/tool_category_data/52/').subscribe(data =>{
//       console.log(data);
//       this._labListed23 = data as [any];
//       if (this._labListed23.Tool_efficiency === false) {
//         $('#lab23').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed23.Tool_efficiency === true) {
//         $('#lab23').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }

//       $("#lab23").hover(()=>{
//         if (this._labListed23.Tool_Category === "Qualifications") {
//             $('#lab23').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed23.Tool_Category === "Field Issues") {
//             $('#lab23').css("fill", "rgb(255, 193, 203)");

//         }
//         else if (this._labListed23.Tool_Category === "Process") {
//             $('#lab23').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed23.Tool_efficiency === false) {
//             $('#lab23').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed23.Tool_efficiency === true) {
//             $('#lab23').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });

//     })


    this.http.get(this.apiRoot+'/api/tool_category_data/14/').subscribe(data =>{
      this._labListed24 = data as [any];
      if (this._labListed24.Tool_efficiency === false) {
        $('#lab24').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed24.Tool_efficiency === true) {
        $('#lab24').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab24").hover(()=>{
        if (this._labListed24.Tool_Category === "Qualifications") {
            $('#lab24').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed24.Tool_Category === "Field Issues") {
            $('#lab24').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed24.Tool_Category === "Process") {
            $('#lab24').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed24.Tool_efficiency === false) {
            $('#lab24').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed24.Tool_efficiency === true) {
            $('#lab24').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/16/').subscribe(data =>{
        this._labListed25a = data as [any];
        if (this._labListed25a.Tool_efficiency === false) {
          $('#lab25a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed25a.Tool_efficiency === true) {
          $('#lab25a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab25a").hover(()=>{
          if (this._labListed25a.Tool_Category === "Qualifications") {
              $('#lab25a').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed25a.Tool_Category === "Field Issues") {
              $('#lab25a').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed25a.Tool_Category === "Process") {
              $('#lab25a').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed25a.Tool_efficiency === false) {
              $('#lab25a').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed25a.Tool_efficiency === true) {
              $('#lab25a').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })

  
      this.http.get(this.apiRoot+'/api/tool_category_data/65/').subscribe(data =>{
          this._labListed25b = data as [any];
          if (this._labListed25b.Tool_efficiency === false) {
            $('#lab25b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed25b.Tool_efficiency === true) {
            $('#lab25b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
    
          $("#lab25b").hover(()=>{
            if (this._labListed25b.Tool_Category === "Qualifications") {
                $('#lab25b').css("fill", "rgb(125, 109, 196)");
            }
            else if (this._labListed25b.Tool_Category === "Field Issues") {
                $('#lab25b').css("fill", "rgb(255, 193, 203)");
    
            }
            else if (this._labListed25b.Tool_Category === "Process") {
                $('#lab25b').css({fill: "#aee9ca"});
            }
        },
         ()=> {
            if (this._labListed25b.Tool_efficiency === false) {
                $('#lab25b').css({fill: "rgba(239, 9, 9, 0.78)"});
            }
            else if (this._labListed25b.Tool_efficiency === true) {
                $('#lab25b').css({fill: "rgba(140, 192, 19, 0.88)"});
            }
        });
    
        })
    
  

    this.http.get(this.apiRoot+'/api/tool_category_data/15/').subscribe(data =>{
      this._labListed26 = data as [any];
      if (this._labListed26.Tool_efficiency === false) {
        $('#lab26').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed26.Tool_efficiency === true) {
        $('#lab26').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab26").hover(()=>{
        if (this._labListed26.Tool_Category === "Qualifications") {
            $('#lab26').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed26.Tool_Category === "Field Issues") {
            $('#lab26').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed26.Tool_Category === "Process") {
            $('#lab26').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed26.Tool_efficiency === false) {
            $('#lab26').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed26.Tool_efficiency === true) {
            $('#lab26').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/97/').subscribe(data =>{
      this._labListed27 = data as [any];
      if (this._labListed27.Tool_efficiency === false) {
        $('#lab27').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed27.Tool_efficiency === true) {
        $('#lab27').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab27").hover(()=>{
        if (this._labListed27.Tool_Category === "Qualifications") {
            $('#lab27').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed27.Tool_Category === "Field Issues") {
            $('#lab27').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed27.Tool_Category === "Process") {
            $('#lab27').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed27.Tool_efficiency === false) {
            $('#lab27').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed27.Tool_efficiency === true) {
            $('#lab27').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/88/').subscribe(data =>{
      this._labListed28 = data as [any];
      if (this._labListed28.Tool_efficiency === false) {
        $('#lab28').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed28.Tool_efficiency === true) {
        $('#lab28').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab28").hover(()=>{
        if (this._labListed28.Tool_Category === "Qualifications") {
            $('#lab28').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed28.Tool_Category === "Field Issues") {
            $('#lab28').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed28.Tool_Category === "Process") {
            $('#lab28').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed28.Tool_efficiency === false) {
            $('#lab28').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed28.Tool_efficiency === true) {
            $('#lab28').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/59/').subscribe(data =>{
      this._labListed29 = data as [any];
      if (this._labListed29.Tool_efficiency === false) {
        $('#lab29').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed29.Tool_efficiency === true) {
        $('#lab29').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab29").hover(()=>{
        if (this._labListed29.Tool_Category === "Qualifications") {
            $('#lab29').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed29.Tool_Category === "Field Issues") {
            $('#lab29').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed29.Tool_Category === "Process") {
            $('#lab29').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed29.Tool_efficiency === false) {
            $('#lab29').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed29.Tool_efficiency === true) {
            $('#lab29').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/110/').subscribe(data =>{
      this._labListed30 = data as [any];
      if (this._labListed30.Tool_efficiency === false) {
        $('#lab30').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed30.Tool_efficiency === true) {
        $('#lab30').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab30").hover(()=>{
        if (this._labListed30.Tool_Category === "Qualifications") {
            $('#lab30').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed30.Tool_Category === "Field Issues") {
            $('#lab30').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed30.Tool_Category === "Process") {
            $('#lab30').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed30.Tool_efficiency === false) {
            $('#lab30').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed30.Tool_efficiency === true) {
            $('#lab30').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/30/').subscribe(data =>{
      this._labListed31 = data as [any];
      if (this._labListed31.Tool_efficiency === false) {
        $('#lab31').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed31.Tool_efficiency === true) {
        $('#lab31').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab31").hover(()=>{
        if (this._labListed31.Tool_Category === "Qualifications") {
            $('#lab31').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed31.Tool_Category === "Field Issues") {
            $('#lab31').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed31.Tool_Category === "Process") {
            $('#lab31').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed31.Tool_efficiency === false) {
            $('#lab31').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed31.Tool_efficiency === true) {
            $('#lab31').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


 this.http.get(this.apiRoot+'/api/tool_category_data/101/').subscribe(data =>{
      this._labListed32 = data as [any];
      if (this._labListed32.Tool_efficiency === false) {
        $('#lab32').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed32.Tool_efficiency === true) {
        $('#lab32').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab32").hover(()=>{
        if (this._labListed32.Tool_Category === "Qualifications") {
            $('#lab32').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed32.Tool_Category === "Field Issues") {
            $('#lab32').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed32.Tool_Category === "Process") {
            $('#lab32').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed32.Tool_efficiency === false) {
            $('#lab32').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed32.Tool_efficiency === true) {
            $('#lab32').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    // this.http.get(this.apiRoot+'/api/tool_category_data/71/').subscribe(data =>{
    //   this._labListed33 = data as [any];
    //   if (this._labListed33.Tool_efficiency === false) {
    //     $('#lab33').css({fill: "rgba(239, 9, 9, 0.78)"});
    //   }
    //   else if (this._labListed33.Tool_efficiency === true) {
    //     $('#lab33').css({fill: "rgba(140, 192, 19, 0.88)"});
    //   }

    //   $("#lab33").hover(()=>{
    //     if (this._labListed33.Tool_Category === "Qualifications") {
    //         $('#lab33').css("fill", "rgb(125, 109, 196)");
    //     }
    //     else if (this._labListed33.Tool_Category === "Field Issues") {
    //         $('#lab33').css("fill", "rgb(255, 193, 203)");

    //     }
    //     else if (this._labListed33.Tool_Category === "Process") {
    //         $('#lab33').css({fill: "#aee9ca"});
    //     }
    // },
    //  ()=> {
    //     if (this._labListed33.Tool_efficiency === false) {
    //         $('#lab33').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed33.Tool_efficiency === true) {
    //         $('#lab33').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    // });

    // })


    this.http.get(this.apiRoot+'/api/tool_category_data/102/').subscribe(data =>{
      this._labListed34 = data as [any];
      if (this._labListed34.Tool_efficiency === false) {
        $('#lab34').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed34.Tool_efficiency === true) {
        $('#lab34').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab34").hover(()=>{
        if (this._labListed34.Tool_Category === "Qualifications") {
            $('#lab34').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed34.Tool_Category === "Field Issues") {
            $('#lab34').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed34.Tool_Category === "Process") {
            $('#lab34').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed34.Tool_efficiency === false) {
            $('#lab34').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed34.Tool_efficiency === true) {
            $('#lab34').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

     })


    this.http.get(this.apiRoot+'/api/tool_category_data/91/').subscribe(data =>{
      this._labListed35 = data as [any];
      if (this._labListed35.Tool_efficiency === false) {
        $('#lab35').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed35.Tool_efficiency === true) {
        $('#lab35').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab35").hover(()=>{
        if (this._labListed35.Tool_Category === "Qualifications") {
            $('#lab35').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed35.Tool_Category === "Field Issues") {
            $('#lab35').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed35.Tool_Category === "Process") {
            $('#lab35').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed35.Tool_efficiency === false) {
            $('#lab35').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed35.Tool_efficiency === true) {
            $('#lab35').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/61/').subscribe(data =>{
      this._labListed36 = data as [any];
      if (this._labListed36.Tool_efficiency === false) {
        $('#lab36').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed36.Tool_efficiency === true) {
        $('#lab36').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab36").hover(()=>{
        if (this._labListed36.Tool_Category === "Qualifications") {
            $('#lab36').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed36.Tool_Category === "Field Issues") {
            $('#lab36').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed36.Tool_Category === "Process") {
            $('#lab36').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed36.Tool_efficiency === false) {
            $('#lab36').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed36.Tool_efficiency === true) {
            $('#lab36').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/68/').subscribe(data =>{
      this._labListed37 = data as [any];
      if (this._labListed37.Tool_efficiency === false) {
        $('#lab37').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed37.Tool_efficiency === true) {
        $('#lab37').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab37").hover(()=>{
        if (this._labListed37.Tool_Category === "Qualifications") {
            $('#lab37').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed37.Tool_Category === "Field Issues") {
            $('#lab37').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed37.Tool_Category === "Process") {
            $('#lab37').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed37.Tool_efficiency === false) {
            $('#lab37').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed37.Tool_efficiency === true) {
            $('#lab37').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    // this.http.get(this.apiRoot+'/api/tool_category_data/43/').subscribe(data =>{
    //   this._labListed38 = data as [any];
    //   if (this._labListed38.Tool_efficiency === false) {
    //     $('#lab38').css({fill: "rgba(239, 9, 9, 0.78)"});
    //   }
    //   else if (this._labListed38.Tool_efficiency === true) {
    //     $('#lab38').css({fill: "rgba(140, 192, 19, 0.88)"});
    //   }

    //   $("#lab38").hover(()=>{
    //     if (this._labListed38.Tool_Category === "Qualifications") {
    //         $('#lab38').css("fill", "rgb(125, 109, 196)");
    //     }
    //     else if (this._labListed38.Tool_Category === "Field Issues") {
    //         $('#lab38').css("fill", "rgb(255, 193, 203)");

    //     }
    //     else if (this._labListed38.Tool_Category === "Process") {
    //         $('#lab38').css({fill: "#aee9ca"});
    //     }
    // },
    //  ()=> {
    //     if (this._labListed38.Tool_efficiency === false) {
    //         $('#lab38').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed38.Tool_efficiency === true) {
    //         $('#lab38').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    // });

    // })

    this.http.get(this.apiRoot+'/api/tool_category_data/43/').subscribe(data =>{
        this._labListed38a = data as [any];
        if (this._labListed38a.Tool_efficiency === false) {
          $('#lab38a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed38a.Tool_efficiency === true) {
          $('#lab38a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab38a").hover(()=>{
          if (this._labListed38a.Tool_Category === "Qualifications") {
              $('#lab38a').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed38a.Tool_Category === "Field Issues") {
              $('#lab38a').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed38a.Tool_Category === "Process") {
              $('#lab38a').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed38a.Tool_efficiency === false) {
              $('#lab38a').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed38a.Tool_efficiency === true) {
              $('#lab38a').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })
  
  
      this.http.get(this.apiRoot+'/api/tool_category_data/87/').subscribe(data =>{
          this._labListed38b = data as [any];
          if (this._labListed38b.Tool_efficiency === false) {
            $('#lab38b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed38b.Tool_efficiency === true) {
            $('#lab38b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
    
          $("#lab38b").hover(()=>{
            if (this._labListed38b.Tool_Category === "Qualifications") {
                $('#lab38b').css("fill", "rgb(125, 109, 196)");
            }
            else if (this._labListed38b.Tool_Category === "Field Issues") {
                $('#lab38b').css("fill", "rgb(255, 193, 203)");
    
            }
            else if (this._labListed38b.Tool_Category === "Process") {
                $('#lab38b').css({fill: "#aee9ca"});
            }
        },
         ()=> {
            if (this._labListed38b.Tool_efficiency === false) {
                $('#lab38b').css({fill: "rgba(239, 9, 9, 0.78)"});
            }
            else if (this._labListed38b.Tool_efficiency === true) {
                $('#lab38b').css({fill: "rgba(140, 192, 19, 0.88)"});
            }
        });
    
        })
    
        this.http.get(this.apiRoot+'/api/tool_category_data/44/').subscribe(data =>{
            this._labListed39a = data as [any];
            if (this._labListed39a.Tool_efficiency === false) {
              $('#lab39a').css({fill: "rgba(239, 9, 9, 0.78)"});
            }
            else if (this._labListed39a.Tool_efficiency === true) {
              $('#lab39a').css({fill: "rgba(140, 192, 19, 0.88)"});
            }
      
            $("#lab39a").hover(()=>{
              if (this._labListed39a.Tool_Category === "Qualifications") {
                  $('#lab39a').css("fill", "rgb(125, 109, 196)");
              }
              else if (this._labListed39a.Tool_Category === "Field Issues") {
                  $('#lab39a').css("fill", "rgb(255, 193, 203)");
      
              }
              else if (this._labListed39a.Tool_Category === "Process") {
                  $('#lab39a').css({fill: "#aee9ca"});
              }
          },
           ()=> {
              if (this._labListed39a.Tool_efficiency === false) {
                  $('#lab39a').css({fill: "rgba(239, 9, 9, 0.78)"});
              }
              else if (this._labListed39a.Tool_efficiency === true) {
                  $('#lab39a').css({fill: "rgba(140, 192, 19, 0.88)"});
              }
          });
      
          })
      
          this.http.get(this.apiRoot+'/api/tool_category_data/44/').subscribe(data =>{
              this._labListed39b = data as [any];
              if (this._labListed39b.Tool_efficiency === false) {
                $('#lab39b').css({fill: "rgba(239, 9, 9, 0.78)"});
              }
              else if (this._labListed39b.Tool_efficiency === true) {
                $('#lab39b').css({fill: "rgba(140, 192, 19, 0.88)"});
              }
        
              $("#lab39b").hover(()=>{
                if (this._labListed39b.Tool_Category === "Qualifications") {
                    $('#lab39b').css("fill", "rgb(125, 109, 196)");
                }
                else if (this._labListed39b.Tool_Category === "Field Issues") {
                    $('#lab39b').css("fill", "rgb(255, 193, 203)");
        
                }
                else if (this._labListed39b.Tool_Category === "Process") {
                    $('#lab39b').css({fill: "#aee9ca"});
                }
            },
             ()=> {
                if (this._labListed39b.Tool_efficiency === false) {
                    $('#lab39b').css({fill: "rgba(239, 9, 9, 0.78)"});
                }
                else if (this._labListed39b.Tool_efficiency === true) {
                    $('#lab39b').css({fill: "rgba(140, 192, 19, 0.88)"});
                }
            });
        
            })
        
      


//     // this.http.get(this.apiRoot+'/api/tool_category_data/44/').subscribe(data =>{
//     //   this._labListed39 = data as [any];
//     //   if (this._labListed39.Tool_efficiency === false) {
//     //     $('#lab39').css({fill: "rgba(239, 9, 9, 0.78)"});
//     //   }
//     //   else if (this._labListed39.Tool_efficiency === true) {
//     //     $('#lab39').css({fill: "rgba(140, 192, 19, 0.88)"});
//     //   }

//     //   $("#lab39").hover(()=>{
//     //     if (this._labListed39.Tool_Category === "Qualifications") {
//     //         $('#lab39').css("fill", "rgb(125, 109, 196)");
//     //     }
//     //     else if (this._labListed39.Tool_Category === "Field Issues") {
//     //         $('#lab39').css("fill", "rgb(255, 193, 203)");

//     //     }
//     //     else if (this._labListed39.Tool_Category === "Process") {
//     //         $('#lab39').css({fill: "#aee9ca"});
//     //     }
//     // },
//     //  ()=> {
//     //     if (this._labListed39.Tool_efficiency === false) {
//     //         $('#lab39').css({fill: "rgba(239, 9, 9, 0.78)"});
//     //     }
//     //     else if (this._labListed39.Tool_efficiency === true) {
//     //         $('#lab39').css({fill: "rgba(140, 192, 19, 0.88)"});
//     //     }
//     // });

//     // })


//     // this.http.get(this.apiRoot+'/api/tool_category_data/45/').subscribe(data =>{
//     //   this._labListed40 = data as [any];
//     //   if (this._labListed40.Tool_efficiency === false) {
//     //     $('#lab40').css({fill: "rgba(239, 9, 9, 0.78)"});
//     //   }
//     //   else if (this._labListed40.Tool_efficiency === true) {
//     //     $('#lab40').css({fill: "rgba(140, 192, 19, 0.88)"});
//     //   }

//     //   $("#lab40").hover(()=>{
//     //     if (this._labListed40.Tool_Category === "Qualifications") {
//     //         $('#lab40').css("fill", "rgb(125, 109, 196)");
//     //     }
//     //     else if (this._labListed40.Tool_Category === "Field Issues") {
//     //         $('#lab40').css("fill", "rgb(255, 193, 203)");

//     //     }
//     //     else if (this._labListed40.Tool_Category === "Process") {
//     //         $('#lab40').css({fill: "#aee9ca"});
//     //     }
//     // },
//     //  ()=> {
//     //     if (this._labListed40.Tool_efficiency === false) {
//     //         $('#lab40').css({fill: "rgba(239, 9, 9, 0.78)"});
//     //     }
//     //     else if (this._labListed40.Tool_efficiency === true) {
//     //         $('#lab40').css({fill: "rgba(140, 192, 19, 0.88)"});
//     //     }
//     // });

//     // })


    // this.http.get(this.apiRoot+'/api/tool_category_data/71/').subscribe(data =>{
    //     console.log(data);
    //     this._labListed40a = data as [any];
    //     if (this._labListed40a.Tool_efficiency === false) {
    //       $('#lab40a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed40a.Tool_efficiency === true) {
    //       $('#lab40a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab40a").hover(()=>{
    //       if (this._labListed40a.Tool_Category === "Qualifications") {
    //           $('#lab40a').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed40a.Tool_Category === "Field Issues") {
    //           $('#lab40a').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed40a.Tool_Category === "Process") {
    //           $('#lab40a').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed40a.Tool_efficiency === false) {
    //           $('#lab40a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed40a.Tool_efficiency === true) {
    //           $('#lab40a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
  
    //   })


    //   this.http.get(this.apiRoot+'/api/tool_category_data/65/').subscribe(data =>{
    //     console.log(data);
    //     this._labListed40b = data as [any];
    //     if (this._labListed40b.Tool_efficiency === false) {
    //       $('#lab40b').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed40b.Tool_efficiency === true) {
    //       $('#lab40b').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab40b").hover(()=>{
    //       if (this._labListed40b.Tool_Category === "Qualifications") {
    //           $('#lab40b').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed40.Tool_Category === "Field Issues") {
    //           $('#lab40b').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed40b.Tool_Category === "Process") {
    //           $('#lab40b').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed40b.Tool_efficiency === false) {
    //           $('#lab40b').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed40.Tool_efficiency === true) {
    //           $('#lab40b').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
  
    //   })
    
    this.http.get(this.apiRoot+'/api/tool_category_data/74/').subscribe(data =>{
        this._labListed40a = data as [any];
        if (this._labListed40a.Tool_efficiency === false) {
          $('#lab40a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed40a.Tool_efficiency === true) {
          $('#lab40a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab40a").hover(()=>{
          if (this._labListed40a.Tool_Category === "Qualifications") {
              $('#lab40a').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed40a.Tool_Category === "Field Issues") {
              $('#lab40a').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed40a.Tool_Category === "Process") {
              $('#lab40a').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed40a.Tool_efficiency === false) {
              $('#lab40a').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed40a.Tool_efficiency === true) {
              $('#lab40a').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })


      this.http.get(this.apiRoot+'/api/tool_category_data/45/').subscribe(data =>{
        this._labListed40b = data as [any];
        if (this._labListed40b.Tool_efficiency === false) {
          $('#lab40b').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed40b.Tool_efficiency === true) {
          $('#lab40b').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab40b").hover(()=>{
          if (this._labListed40b.Tool_Category === "Qualifications") {
              $('#lab40b').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed40b.Tool_Category === "Field Issues") {
              $('#lab40b').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed40b.Tool_Category === "Process") {
              $('#lab40b').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed40b.Tool_efficiency === false) {
              $('#lab40b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed40b.Tool_efficiency === true) {
              $('#lab40b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
       })



    this.http.get(this.apiRoot+'/api/tool_category_data/46/').subscribe(data =>{
      this._labListed41 = data as [any];
      if (this._labListed41.Tool_efficiency === false) {
        $('#lab41').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed41.Tool_efficiency === true) {
        $('#lab41').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab41").hover(()=>{
        if (this._labListed41.Tool_Category === "Qualifications") {
            $('#lab41').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed41.Tool_Category === "Field Issues") {
            $('#lab41').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed41.Tool_Category === "Process") {
            $('#lab41').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed41.Tool_efficiency === false) {
            $('#lab41').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed41.Tool_efficiency === true) {
            $('#lab41').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/85/').subscribe(data =>{
      this._labListed42 = data as [any];
      if (this._labListed42.Tool_efficiency === false) {
        $('#lab42').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed42.Tool_efficiency === true) {
        $('#lab42').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab42").hover(()=>{
        if (this._labListed42.Tool_Category === "Qualifications") {
            $('#lab42').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed42.Tool_Category === "Field Issues") {
            $('#lab42').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed42.Tool_Category === "Process") {
            $('#lab42').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed42.Tool_efficiency === false) {
            $('#lab42').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed42.Tool_efficiency === true) {
            $('#lab42').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/90/').subscribe(data =>{
      this._labListed43 = data as [any];
      if (this._labListed43.Tool_efficiency === false) {
        $('#lab43').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed43.Tool_efficiency === true) {
        $('#lab43').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab43").hover(()=>{
        if (this._labListed43.Tool_Category === "Qualifications") {
            $('#lab43').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed43.Tool_Category === "Field Issues") {
            $('#lab43').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed43.Tool_Category === "Process") {
            $('#lab43').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed43.Tool_efficiency === false) {
            $('#lab43').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed43.Tool_efficiency === true) {
            $('#lab43').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.labData44 = this.http.get(this.apiRoot+'/api/tool_category_data/82/').subscribe(data =>{
      this._labListed44 = data as [any];
      if (this._labListed44.Tool_efficiency === false) {
        $('#lab44').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed44.Tool_efficiency === true) {
        $('#lab44').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab44").hover(()=>{
        if (this._labListed44.Tool_Category === "Qualifications") {
            $('#lab44').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed44.Tool_Category === "Field Issues") {
            $('#lab44').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed44.Tool_Category === "Process") {
            $('#lab44').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed44.Tool_efficiency === false) {
            $('#lab44').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed44.Tool_efficiency === true) {
            $('#lab44').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/84/').subscribe(data =>{
      this._labListed45 = data as [any];
      if (this._labListed45.Tool_efficiency === false) {
        $('#lab45').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed45.Tool_efficiency === true) {
        $('#lab45').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab45").hover(()=>{
        if (this._labListed45.Tool_Category === "Qualifications") {
            $('#lab45').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed45.Tool_Category === "Field Issues") {
            $('#lab45').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed45.Tool_Category === "Process") {
            $('#lab45').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed45.Tool_efficiency === false) {
            $('#lab45').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed45.Tool_efficiency === true) {
            $('#lab45').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

//  this.http.get(this.apiRoot+'/api/tool_category_data/82/').subscribe(data =>{
//         console.log(data);
//         this._labListed44 = data as [any];
//         if (this._labListed44.Tool_efficiency === false) {
//           $('#lab44').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed44.Tool_efficiency === true) {
//           $('#lab44').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
  
//         $("#lab44").hover(()=>{
//           if (this._labListed44.Tool_Category === "Qualifications") {
//               $('#lab44').css("fill", "rgb(125, 109, 196)");
//           }
//           else if (this._labListed44.Tool_Category === "Field Issues") {
//               $('#lab44').css("fill", "rgb(255, 193, 203)");
  
//           }
//           else if (this._labListed44.Tool_Category === "Process") {
//               $('#lab44').css({fill: "#aee9ca"});
//           }
//       },
//        ()=> {
//           if (this._labListed44.Tool_efficiency === false) {
//               $('#lab44').css({fill: "rgba(239, 9, 9, 0.78)"});
//           }
//           else if (this._labListed44.Tool_efficiency === true) {
//               $('#lab44').css({fill: "rgba(140, 192, 19, 0.88)"});
//           }
//       });
  
//       })
  
  
//       this.http.get(this.apiRoot+'/api/tool_category_data/84/').subscribe(data =>{
//         console.log(data);
//         this._labListed45 = data as [any];
//         if (this._labListed45.Tool_efficiency === false) {
//           $('#lab45').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed45.Tool_efficiency === true) {
//           $('#lab45').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
  
//         $("#lab45").hover(()=>{
//           if (this._labListed45.Tool_Category === "Qualifications") {
//               $('#lab45').css("fill", "rgb(125, 109, 196)");
//           }
//           else if (this._labListed45.Tool_Category === "Field Issues") {
//               $('#lab45').css("fill", "rgb(255, 193, 203)");
  
//           }
//           else if (this._labListed45.Tool_Category === "Process") {
//               $('#lab45').css({fill: "#aee9ca"});
//           }
//       },
//        ()=> {
//           if (this._labListed45.Tool_efficiency === false) {
//               $('#lab45').css({fill: "rgba(239, 9, 9, 0.78)"});
//           }
//           else if (this._labListed45.Tool_efficiency === true) {
//               $('#lab45').css({fill: "rgba(140, 192, 19, 0.88)"});
//           }
//       });
  
//       })
  


    this.http.get(this.apiRoot+'/api/tool_category_data/92/').subscribe(data =>{
        this._labListed46 = data as [any];
        if (this._labListed46.Tool_efficiency === false) {
          $('#lab46').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed46.Tool_efficiency === true) {
          $('#lab46').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab46").hover(()=>{
          if (this._labListed46.Tool_Category === "Qualifications") {
              $('#lab46').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed46.Tool_Category === "Field Issues") {
              $('#lab46').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed46.Tool_Category === "Process") {
              $('#lab46').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed46.Tool_efficiency === false) {
              $('#lab46').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed46.Tool_efficiency === true) {
              $('#lab46').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })
  
      this.http.get(this.apiRoot+'/api/tool_category_data/93/').subscribe(data =>{
        this._labListed47 = data as [any];
        if (this._labListed47.Tool_efficiency === false) {
          $('#lab47').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed47.Tool_efficiency === true) {
          $('#lab47').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab47").hover(()=>{
          if (this._labListed47.Tool_Category === "Qualifications") {
              $('#lab47').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed47.Tool_Category === "Field Issues") {
              $('#lab47').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed47.Tool_Category === "Process") {
              $('#lab47').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed47.Tool_efficiency === false) {
              $('#lab47').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed47.Tool_efficiency === true) {
              $('#lab47').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })
  
    
      this.http.get(this.apiRoot+'/api/tool_category_data/94/').subscribe(data =>{
        this._labListed48 = data as [any];
        if (this._labListed48.Tool_efficiency === false) {
          $('#lab48').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed48.Tool_efficiency === true) {
          $('#lab48').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab48").hover(()=>{
          if (this._labListed48.Tool_Category === "Qualifications") {
              $('#lab48').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed48.Tool_Category === "Field Issues") {
              $('#lab48').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed48.Tool_Category === "Process") {
              $('#lab48').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed48.Tool_efficiency === false) {
              $('#lab48').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed48.Tool_efficiency === true) {
              $('#lab48').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })


    // this._cumulativeLab = '';
    // this._cumulativeUtilization = this.http.get('assets/json/labUtilization.json').subscribe(data=>{
    //   this._cumulativeLab = data;
    // })

    this._cumulativeLab = '';
    this._data1.dashboardCumulative().subscribe(data=>{
        this._cumulativeLab = data;
    })

    // this._quaterLab = '';
    // this._quaterUtilization = this.http.get('assets/json/quaterlyLab.json').subscribe(data=>{
    //   this._quaterLab = data;
    // })

    this._quaterLab = '';
    this._data1.dashboardQuaterly().subscribe(data=>{
        this._quaterLab = data;
    })


        
  }

  ngOnDestroy(){
      
  }






}