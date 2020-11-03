import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { b } from '@angular/core/src/render3';
// import * as $ from ‘jquery’;
declare var jquery:any;
declare var $ :any;
 

@Component({
  selector: 'app-bayhome',
  templateUrl: './bayhome.component.html',
  styleUrls: ['./bayhome.component.css']
})
export class BayhomeComponent implements OnInit {
  _cumulativeLab : any;
  _quaterLab : any;
  clock : any;
  [x: string]: any;
  constructor(private _data1:DataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    setInterval(()=>{
      this.clock = Date.now();
    },1000);

    
    this.toolData = this._data1.getTools().subscribe(data =>{
      this._toolsListed = data as [any];
      
      this.bay23 =  this._toolsListed.filter(data=>{
        return data.bay_number==31 && data.is_active == true
      });
        this.bay23.forEach(function (value) {
        if(value.status === 'IN'){
          $('#bay31').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay31').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay31').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay31').css({fill: "#9ac3f5"});
        }
        })
      
      this.bay4 =  this._toolsListed.filter(data=>{
        return data.bay_number==4 && data.is_active == true
      });
        this.bay4.forEach(function (value) {
        if(value.status === 'IN'){
          $('#bay4').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay4').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay4').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay4').css({fill: "#9ac3f5"});
        }
        })

        this.bay1 =  this._toolsListed.filter(data=>{
          return data.bay_number==1 && data.is_active == true
        });

          this.bay1.forEach(function (value) {
          if(value.status === 'IN'){
            $('#bay1').css({fill: "#ffff80"});
          }
          else if (value.status === 'ID') {
            $('#bay1').css({fill: "#ff7f7f"});
          }
          else if (value.status === 'PR') {
            $('#bay1').css({fill: "#c2de80"});
          }
          else if (value.status === 'MA') {
            $('#bay1').css({fill: "#9ac3f5"});
          }
          })


          this.bay2 = this._toolsListed.filter(data=>{
            return data.bay_number==3 && data.is_active == true
          });
            this.bay2.forEach(function (value) {
              
            if(value.status === 'IN'){
              $('#bay2').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay2').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay2').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay2').css({fill: "#9ac3f5"});
            }
            })

            this.bay3 =  this._toolsListed.filter(data=>{
              return data.bay_number==3 && data.is_active == true
            });
              this.bay3.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay3').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay3').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay3').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay3').css({fill: "#9ac3f5"});
              }
              })

              this.bay5 =  this._toolsListed.filter(data=>{
                return data.bay_number==5 && data.is_active == true
              });
                this.bay5.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay5').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay5').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay5').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay5').css({fill: "#9ac3f5"});
                }
                })

                this.bay6A =  this._toolsListed.filter(data=>{
                  return data.bay_number=='6A' && data.is_active == true
                });
                  this.bay6A.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay6A').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay6A').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay6A').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay6A').css({fill: "#9ac3f5"});
                  }
                  })

                  this.bay6B =  this._toolsListed.filter(data=>{
                    return data.bay_number=='6B' && data.is_active == true
                  });
                    this.bay6B.forEach(function (value) {
                    if(value.status === 'IN'){
                      $('#bay6B').css({fill: "#ffff80"});
                    }
                    else if (value.status === 'ID') {
                      $('#bay6B').css({fill: "#ff7f7f"});
                    }
                    else if (value.status === 'PR') {
                      $('#bay6B').css({fill: "#c2de80"});
                    }
                    else if (value.status === 'MA') {
                      $('#bay6B').css({fill: "#9ac3f5"});
                    }
                    })

                    this.bay6C =  this._toolsListed.filter(data=>{
                      return data.bay_number=='6C' && data.is_active == true
                    });
                      this.bay6C.forEach(function (value) {
                      if(value.status === 'IN'){
                        $('#bay6C').css({fill: "#ffff80"});
                      }
                      else if (value.status === 'ID') {
                        $('#bay6C').css({fill: "#ff7f7f"});
                      }
                      else if (value.status === 'PR') {
                        $('#bay6C').css({fill: "#c2de80"});
                      }
                      else if (value.status === 'MA') {
                        $('#bay6C').css({fill: "#9ac3f5"});
                      }
                      })

            


            this.bay7 =  this._toolsListed.filter(data=>{
              return data.bay_number==7 && data.is_active == true
            });
              this.bay7.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay7').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay7').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay7').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay7').css({fill: "#9ac3f5"});
              }
              })

              this.bay8 =  this._toolsListed.filter(data=>{
                return data.bay_number==8 && data.is_active == true
              });
                this.bay8.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay8').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay8').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay8').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay8').css({fill: "#9ac3f5"});
                }
                })

              // this.bay9 =  this._toolsListed.filter(data=>{
              //   return data.bay_number==9 && data.is_active == true
              // });
              //   this.bay9.forEach(function (value) {
              //   if(value.status === 'IN'){
              //     $('#bay9').css({fill: "#ffff80"});
              //   }
              //   else if (value.status === 'ID') {
              //     $('#bay9').css({fill: "#ff7f7f"});
              //   }
              //   else if (value.status === 'PR') {
              //     $('#bay9').css({fill: "#c2de80"});
              //   }
              //   else if (value.status === 'MA') {
              //     $('#bay9').css({fill: "#9ac3f5"});
              //   }
              //   })

              this.bay10 =  this._toolsListed.filter(data=>{
                return data.bay_number==10 && data.is_active == true
              });
                this.bay10.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay10').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay10').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay10').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay10').css({fill: "#9ac3f5"});
                }
                })


               
                this.bay11 =  this._toolsListed.filter(data=>{
                  return data.bay_number=='11' && data.is_active == true
                });
                  this.bay11.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay11').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay11').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay11').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay11').css({fill: "#9ac3f5"});
                  }
                  })


                  // this.bay11B =  this._toolsListed.filter(data=>{
                  //   return data.bay_number=='11B' && data.is_active == true
                  // });
                  //   this.bay11B.forEach(function (value) {
                  //   if(value.status === 'IN'){
                  //     $('#bay11B').css({fill: "#ffff80"});
                  //   }
                  //   else if (value.status === 'ID') {
                  //     $('#bay11B').css({fill: "#ff7f7f"});
                  //   }
                  //   else if (value.status === 'PR') {
                  //     $('#bay11B').css({fill: "#c2de80"});
                  //   }
                  //   else if (value.status === 'MA') {
                  //     $('#bay11B').css({fill: "#9ac3f5"});
                  //   }
                  //   })



            // this.bay12 =  this._toolsListed.filter(data=>{
            //   return data.bay_number==12 && data.is_active == true
            // });
            //   this.bay12.forEach(function (value) {
            //   if(value.status === 'IN'){
            //     $('#bay12').css({fill: "#ffff80"});
            //   }
            //   else if (value.status === 'ID') {
            //     $('#bay12').css({fill: "#ff7f7f"});
            //   }
            //   else if (value.status === 'PR') {
            //     $('#bay12').css({fill: "#c2de80"});
            //   }
            //   else if (value.status === 'MA') {
            //     $('#bay12').css({fill: "#9ac3f5"});
            //   }
            //   })


              this.bay12A =  this._toolsListed.filter(data=>{
                return data.bay_number=='12A' && data.is_active == true
              });
                this.bay12A.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay12A').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay12A').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay12A').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay12A').css({fill: "#9ac3f5"});
                }
                })
  
                this.bay12B =  this._toolsListed.filter(data=>{
                  return data.bay_number=='12B' && data.is_active == true
                });
                  this.bay12B.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay12B').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay12B').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay12B').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay12B').css({fill: "#9ac3f5"});
                  }
                  })
            
            this.bay13 =  this._toolsListed.filter(data=>{
              return data.bay_number==13 && data.is_active == true
            });
              this.bay13.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay13').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay13').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay13').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay13').css({fill: "#9ac3f5"});
              }
              })  

              this.bay14 =  this._toolsListed.filter(data=>{
              return data.bay_number==14 && data.is_active == true
              });
              this.bay14.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay14').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay14').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay14').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay14').css({fill: "#9ac3f5"});
              }
              })

              this.bay15 =  this._toolsListed.filter(data=>{
                return data.bay_number==15 && data.is_active == true
              });
                this.bay15.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay15').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay15').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay15').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay15').css({fill: "#9ac3f5"});
                }
                })

                this.bay16 =  this._toolsListed.filter(data=>{
                  return data.bay_number==16 && data.is_active == true
                });
                  this.bay16.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay16').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay16').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay16').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay16').css({fill: "#9ac3f5"});
                  }
                  })

                  this.bay17 =  this._toolsListed.filter(data=>{
                    return data.bay_number==18 && data.is_active == true
                  });
                    this.bay17.forEach(function (value) {
                    if(value.status === 'IN'){
                      $('#bay17').css({fill: "#ffff80"});
                    }
                    else if (value.status === 'ID') {
                      $('#bay17').css({fill: "#ff7f7f"});
                    }
                    else if (value.status === 'PR') {
                      $('#bay17').css({fill: "#c2de80"});
                    }
                    else if (value.status === 'MA') {
                      $('#bay17').css({fill: "#9ac3f5"});
                    }
                    })

                    this.bay18 =  this._toolsListed.filter(data=>{
                      return data.bay_number==18 && data.is_active == true
                    });
                      this.bay18.forEach(function (value) {
                      if(value.status === 'IN'){
                        $('#bay18').css({fill: "#ffff80"});
                      }
                      else if (value.status === 'ID') {
                        $('#bay18').css({fill: "#ff7f7f"});
                      }
                      else if (value.status === 'PR') {
                        $('#bay18').css({fill: "#c2de80"});
                      }
                      else if (value.status === 'MA') {
                        $('#bay18').css({fill: "#9ac3f5"});
                      }
                      })

              this.bay19 =  this._toolsListed.filter(data=>{
                return data.bay_number==19 && data.is_active == true
              });
                this.bay19.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay19').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay19').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay19').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay19').css({fill: "#9ac3f5"});
                }
                })

                this.bay20 =  this._toolsListed.filter(data=>{
                  return data.bay_number==20 && data.is_active == true
                });
                  this.bay20.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay20').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay20').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay20').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay20').css({fill: "#9ac3f5"});
                  }
                  })

                this.bay21 =  this._toolsListed.filter(data=>{
                  return data.bay_number==21 && data.is_active == true
                });
                  this.bay21.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay21').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay21').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay21').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay21').css({fill: "#9ac3f5"});
                  }
                  })

                this.bay22 =  this._toolsListed.filter(data=>{
                  return data.bay_number==22 && data.is_active == true
                });
                  this.bay22.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay22').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay22').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay22').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay22').css({fill: "#9ac3f5"});
                  }
                  })

                  this.bay24 =  this._toolsListed.filter(data=>{
                    return data.bay_number==24 && data.is_active == true
                  });
                    this.bay24.forEach(function (value) {
                    if(value.status === 'IN'){
                      $('#bay24').css({fill: "#ffff80"});
                    }
                    else if (value.status === 'ID') {
                      $('#bay24').css({fill: "#ff7f7f"});
                    }
                    else if (value.status === 'PR') {
                      $('#bay24').css({fill: "#c2de80"});
                    }
                    else if (value.status === 'MA') {
                      $('#bay24').css({fill: "#9ac3f5"});
                    }
                    })

                this.bay25A =  this._toolsListed.filter(data=>{
                  return data.bay_number=='25A' && data.is_active == true
                });
                  this.bay25A.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay25A').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay25A').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay25A').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay25A').css({fill: "#9ac3f5"});
                  }
                  })

                  this.bay25B =  this._toolsListed.filter(data=>{
                    return data.bay_number=='25B' && data.is_active == true
                  });
                    this.bay25B.forEach(function (value) {
                    if(value.status === 'IN'){
                      $('#bay25B').css({fill: "#ffff80"});
                    }
                    else if (value.status === 'ID') {
                      $('#bay25B').css({fill: "#ff7f7f"});
                    }
                    else if (value.status === 'PR') {
                      $('#bay25B').css({fill: "#c2de80"});
                    }
                    else if (value.status === 'MA') {
                      $('#bay25B').css({fill: "#9ac3f5"});
                    }
                    })

                  this.bay26 =  this._toolsListed.filter(data=>{
                    return data.bay_number==26 && data.is_active == true
                  });
                    this.bay26.forEach(function (value) {
                    if(value.status === 'IN'){
                      $('#bay26').css({fill: "#ffff80"});
                    }
                    else if (value.status === 'ID') {
                      $('#bay26').css({fill: "#ff7f7f"});
                    }
                    else if (value.status === 'PR') {
                      $('#bay26').css({fill: "#c2de80"});
                    }
                    else if (value.status === 'MA') {
                      $('#bay26').css({fill: "#9ac3f5"});
                    }
                    })

                    this.bay27 =  this._toolsListed.filter(data=>{
                      return data.bay_number==27 && data.is_active == true
                    });
                      this.bay27.forEach(function (value) {
                      if(value.status === 'IN'){
                        $('#bay27').css({fill: "#ffff80"});
                      }
                      else if (value.status === 'ID') {
                        $('#bay27').css({fill: "#ff7f7f"});
                      }
                      else if (value.status === 'PR') {
                        $('#bay27').css({fill: "#c2de80"});
                      }
                      else if (value.status === 'MA') {
                        $('#bay27').css({fill: "#9ac3f5"});
                      }
                      })

                    this.bay28 =  this._toolsListed.filter(data=>{
                      return data.bay_number==28 && data.is_active == true
                    });
                      this.bay28.forEach(function (value) {
                      if(value.status === 'IN'){
                        $('#bay28').css({fill: "#ffff80"});
                      }
                      else if (value.status === 'ID') {
                        $('#bay28').css({fill: "#ff7f7f"});
                      }
                      else if (value.status === 'PR') {
                        $('#bay28').css({fill: "#c2de80"});
                      }
                      else if (value.status === 'MA') {
                        $('#bay28').css({fill: "#9ac3f5"});
                      }
                      })

                      this.bay29 =  this._toolsListed.filter(data=>{
                        return data.bay_number==29 && data.is_active == true
                      });
                        this.bay29.forEach(function (value) {
                        if(value.status === 'IN'){
                          $('#bay29').css({fill: "#ffff80"});
                        }
                        else if (value.status === 'ID') {
                          $('#bay29').css({fill: "#ff7f7f"});
                        }
                        else if (value.status === 'PR') {
                          $('#bay29').css({fill: "#c2de80"});
                        }
                        else if (value.status === 'MA') {
                          $('#bay29').css({fill: "#9ac3f5"});
                        }
                        })

                      this.bay30 =  this._toolsListed.filter(data=>{
                        return data.bay_number==30 && data.is_active == true
                      });
                        this.bay30.forEach(function (value) {
                        if(value.status === 'IN'){
                          $('#bay30').css({fill: "#ffff80"});
                        }
                        else if (value.status === 'ID') {
                          $('#bay30').css({fill: "#ff7f7f"});
                        }
                        else if (value.status === 'PR') {
                          $('#bay30').css({fill: "#c2de80"});
                        }
                        else if (value.status === 'MA') {
                          $('#bay30').css({fill: "#9ac3f5"});
                        }
                        })

                      this.bay31 =  this._toolsListed.filter(data=>{
                        return data.bay_number==31 && data.is_active == true
                      });
                        this.bay31.forEach(function (value) {
                        if(value.status === 'IN'){
                          $('#bay31').css({fill: "#ffff80"});
                        }
                        else if (value.status === 'ID') {
                          $('#bay31').css({fill: "#ff7f7f"});
                        }
                        else if (value.status === 'PR') {
                          $('#bay31').css({fill: "#c2de80"});
                        }
                        else if (value.status === 'MA') {
                          $('#bay31').css({fill: "#9ac3f5"});
                        }
                        })

                      this.bay32 =  this._toolsListed.filter(data=>{
                        return data.bay_number==32 && data.is_active == true
                      });
                        this.bay32.forEach(function (value) {
                        if(value.status === 'IN'){
                          $('#bay32').css({fill: "#ffff80"});
                        }
                        else if (value.status === 'ID') {
                          $('#bay32').css({fill: "#ff7f7f"});
                        }
                        else if (value.status === 'PR') {
                          $('#bay32').css({fill: "#c2de80"});
                        }
                        else if (value.status === 'MA') {
                          $('#bay32').css({fill: "#9ac3f5"});
                        }
                        })

                    this.bay33 =  this._toolsListed.filter(data=>{
                      return data.bay_number==32 && data.is_active == true
                    });
                      this.bay33.forEach(function (value) {
                      if(value.status === 'IN'){
                        $('#bay33').css({fill: "#ffff80"});
                      }
                      else if (value.status === 'ID') {
                        $('#bay33').css({fill: "#ff7f7f"});
                      }
                      else if (value.status === 'PR') {
                        $('#bay33').css({fill: "#c2de80"});
                      }
                      else if (value.status === 'MA') {
                        $('#bay33').css({fill: "#9ac3f5"});
                      }
                      })

                    this.bay34 =  this._toolsListed.filter(data=>{
                      return data.bay_number==34 && data.is_active == true
                    });
                      this.bay34.forEach(function (value) {
                      if(value.status === 'IN'){
                        $('#bay34').css({fill: "#ffff80"});
                      }
                      else if (value.status === 'ID') {
                        $('#bay34').css({fill: "#ff7f7f"});
                      }
                      else if (value.status === 'PR') {
                        $('#bay34').css({fill: "#c2de80"});
                      }
                      else if (value.status === 'MA') {
                        $('#bay34').css({fill: "#9ac3f5"});
                      }
                      })

                    this.bay35 =  this._toolsListed.filter(data=>{
                      return data.bay_number==35 && data.is_active == true
                    });
                      this.bay35.forEach(function (value) {
                      if(value.status === 'IN'){
                        $('#bay35').css({fill: "#ffff80"});
                      }
                      else if (value.status === 'ID') {
                        $('#bay35').css({fill: "#ff7f7f"});
                      }
                      else if (value.status === 'PR') {
                        $('#bay35').css({fill: "#c2de80"});
                      }
                      else if (value.status === 'MA') {
                        $('#bay35').css({fill: "#9ac3f5"});
                      }
                      })

                      this.bay36 =  this._toolsListed.filter(data=>{
                        return data.bay_number==36 && data.is_active == true
                      });
                        this.bay36.forEach(function (value) {
                        if(value.status === 'IN'){
                          $('#bay36').css({fill: "#ffff80"});
                        }
                        else if (value.status === 'ID') {
                          $('#bay36').css({fill: "#ff7f7f"});
                        }
                        else if (value.status === 'PR') {
                          $('#bay36').css({fill: "#c2de80"});
                        }
                        else if (value.status === 'MA') {
                          $('#bay36').css({fill: "#9ac3f5"});
                        }
                        })

                        this.bay37 =  this._toolsListed.filter(data=>{
                          return data.bay_number==37 && data.is_active == true
                        });
                          this.bay37.forEach(function (value) {
                          if(value.status === 'IN'){
                            $('#bay37').css({fill: "#ffff80"});
                          }
                          else if (value.status === 'ID') {
                            $('#bay37').css({fill: "#ff7f7f"});
                          }
                          else if (value.status === 'PR') {
                            $('#bay37').css({fill: "#c2de80"});
                          }
                          else if (value.status === 'MA') {
                            $('#bay37').css({fill: "#9ac3f5"});
                          }
                          })

                        this.bay38A =  this._toolsListed.filter(data=>{
                          return data.bay_number=='38A' && data.is_active == true
                        });
                          this.bay38A.forEach(function (value) {
                          if(value.status === 'IN'){
                            $('#bay38A').css({fill: "#ffff80"});
                          }
                          else if (value.status === 'ID') {
                            $('#bay38A').css({fill: "#ff7f7f"});
                          }
                          else if (value.status === 'PR') {
                            $('#bay38A').css({fill: "#c2de80"});
                          }
                          else if (value.status === 'MA') {
                            $('#bay38A').css({fill: "#9ac3f5"});
                          }
                          })

                          this.bay38B =  this._toolsListed.filter(data=>{
                            return data.bay_number=='38B' && data.is_active == true
                          });
                            this.bay38B.forEach(function (value) {
                            if(value.status === 'IN'){
                              $('#bay38B').css({fill: "#ffff80"});
                            }
                            else if (value.status === 'ID') {
                              $('#bay38B').css({fill: "#ff7f7f"});
                            }
                            else if (value.status === 'PR') {
                              $('#bay38B').css({fill: "#c2de80"});
                            }
                            else if (value.status === 'MA') {
                              $('#bay38B').css({fill: "#9ac3f5"});
                            }
                            })

                    
                            this.bay38C =  this._toolsListed.filter(data=>{
                              return data.bay_number=='38C' && data.is_active == true
                            });
                              this.bay38C.forEach(function (value) {
                              if(value.status === 'IN'){
                                $('#bay38C').css({fill: "#ffff80"});
                              }
                              else if (value.status === 'ID') {
                                $('#bay38C').css({fill: "#ff7f7f"});
                              }
                              else if (value.status === 'PR') {
                                $('#bay38C').css({fill: "#c2de80"});
                              }
                              else if (value.status === 'MA') {
                                $('#bay38C').css({fill: "#9ac3f5"});
                              }
                              })
  


                        this.bay39 =  this._toolsListed.filter(data=>{
                          return data.bay_number=='39' && data.is_active == true
                        });
                          this.bay39.forEach(function (value) {
                          if(value.status === 'IN'){
                            $('#bay39').css({fill: "#ffff80"});
                          }
                          else if (value.status === 'ID') {
                            $('#bay39').css({fill: "#ff7f7f"});
                          }
                          else if (value.status === 'PR') {
                            $('#bay39').css({fill: "#c2de80"});
                          }
                          else if (value.status === 'MA') {
                            $('#bay39').css({fill: "#9ac3f5"});
                          }
                          })

                          // this.bay39B =  this._toolsListed.filter(data=>{
                          //   return data.bay_number=='39B' && data.is_active == true
                          // });
                          //   this.bay39B.forEach(function (value) {
                          //   if(value.status === 'IN'){
                          //     $('#bay39B').css({fill: "#ffff80"});
                          //   }
                          //   else if (value.status === 'ID') {
                          //     $('#bay39B').css({fill: "#ff7f7f"});
                          //   }
                          //   else if (value.status === 'PR') {
                          //     $('#bay39B').css({fill: "#c2de80"});
                          //   }
                          //   else if (value.status === 'MA') {
                          //     $('#bay39B').css({fill: "#9ac3f5"});
                          //   }
                          //   })

                          // this.bay40 =  this._toolsListed.filter(data=>{
                          //   return data.bay_number==40 && data.is_active == true
                          // });
                          //   this.bay40.forEach(function (value) {
                          //   if(value.status === 'IN'){
                          //     $('#bay40').css({fill: "#ffff80"});
                          //   }
                          //   else if (value.status === 'ID') {
                          //     $('#bay40').css({fill: "#ff7f7f"});
                          //   }
                          //   else if (value.status === 'PR') {
                          //     $('#bay40').css({fill: "#c2de80"});
                          //   }
                          //   else if (value.status === 'MA') {
                          //     $('#bay40').css({fill: "#9ac3f5"});
                          //   }
                          //   })

                         
                          this.bay40A =  this._toolsListed.filter(data=>{
                            return data.bay_number=='40A' && data.is_active == true
                          });
                            this.bay40A.forEach(function (value) {
                            if(value.status === 'IN'){
                              $('#bay40A').css({fill: "#ffff80"});
                            }
                            else if (value.status === 'ID') {
                              $('#bay40A').css({fill: "#ff7f7f"});
                            }
                            else if (value.status === 'PR') {
                              $('#bay40A').css({fill: "#c2de80"});
                            }
                            else if (value.status === 'MA') {
                              $('#bay40A').css({fill: "#9ac3f5"});
                            }
                            })

                            this.bay40B =  this._toolsListed.filter(data=>{
                              return data.bay_number=='40B' && data.is_active == true
                            });
                              this.bay40B.forEach(function (value) {
                              if(value.status === 'IN'){
                                $('#bay40B').css({fill: "#ffff80"});
                              }
                              else if (value.status === 'ID') {
                                $('#bay40B').css({fill: "#ff7f7f"});
                              }
                              else if (value.status === 'PR') {
                                $('#bay40B').css({fill: "#c2de80"});
                              }
                              else if (value.status === 'MA') {
                                $('#bay40B').css({fill: "#9ac3f5"});
                              }
                              })

                          this.bay41 =  this._toolsListed.filter(data=>{
                            return data.bay_number==41 && data.is_active == true
                          });
                            this.bay41.forEach(function (value) {
                            if(value.status === 'IN'){
                              $('#bay41').css({fill: "#ffff80"});
                            }
                            else if (value.status === 'ID') {
                              $('#bay41').css({fill: "#ff7f7f"});
                            }
                            else if (value.status === 'PR') {
                              $('#bay41').css({fill: "#c2de80"});
                            }
                            else if (value.status === 'MA') {
                              $('#bay41').css({fill: "#9ac3f5"});
                            }
                            })

                          this.bay42 =  this._toolsListed.filter(data=>{
                            return data.bay_number==42 && data.is_active == true
                          });
                            this.bay42.forEach(function (value) {
                            if(value.status === 'IN'){
                              $('#bay42').css({fill: "#ffff80"});
                            }
                            else if (value.status === 'ID') {
                              $('#bay42').css({fill: "#ff7f7f"});
                            }
                            else if (value.status === 'PR') {
                              $('#bay42').css({fill: "#c2de80"});
                            }
                            else if (value.status === 'MA') {
                              $('#bay42').css({fill: "#9ac3f5"});
                            }
                            })

                            this.bay43 =  this._toolsListed.filter(data=>{
                              return data.bay_number==43 && data.is_active == true
                            });
                              this.bay43.forEach(function (value) {
                              if(value.status === 'IN'){
                                $('#bay43').css({fill: "#ffff80"});
                              }
                              else if (value.status === 'ID') {
                                $('#bay43').css({fill: "#ff7f7f"});
                              }
                              else if (value.status === 'PR') {
                                $('#bay43').css({fill: "#c2de80"});
                              }
                              else if (value.status === 'MA') {
                                $('#bay43').css({fill: "#9ac3f5"});
                              }
                              })

                            this.bay44 =  this._toolsListed.filter(data=>{
                              return data.bay_number==44 && data.is_active == true
                            });
                              this.bay44.forEach(function (value) {
                              if(value.status === 'IN'){
                                $('#bay44').css({fill: "#ffff80"});
                              }
                              else if (value.status === 'ID') {
                                $('#bay44').css({fill: "#ff7f7f"});
                              }
                              else if (value.status === 'PR') {
                                $('#bay44').css({fill: "#c2de80"});
                              }
                              else if (value.status === 'MA') {
                                $('#bay44').css({fill: "#9ac3f5"});
                              }
                              })

                      this.bay45 =  this._toolsListed.filter(data=>{
                        return data.bay_number==45 && data.is_active == true
                      });
                        this.bay45.forEach(function (value) {
                        if(value.status === 'IN'){
                          $('#bay45').css({fill: "#ffff80"});
                        }
                        else if (value.status === 'ID') {
                          $('#bay45').css({fill: "#ff7f7f"});
                        }
                        else if (value.status === 'PR') {
                          $('#bay45').css({fill: "#c2de80"});
                        }
                        else if (value.status === 'MA') {
                          $('#bay45').css({fill: "#9ac3f5"});
                        }
                        })
                      
                        this.bay46 =  this._toolsListed.filter(data=>{
                          return data.bay_number==46 && data.is_active == true
                        });
                          this.bay46.forEach(function (value) {
                          if(value.status === 'IN'){
                            $('#bay46').css({fill: "#ffff80"});
                          }
                          else if (value.status === 'ID') {
                            $('#bay46').css({fill: "#ff7f7f"});
                          }
                          else if (value.status === 'PR') {
                            $('#bay46').css({fill: "#c2de80"});
                          }
                          else if (value.status === 'MA') {
                            $('#bay46').css({fill: "#9ac3f5"});
                          }
                          })

                          this.bay47 =  this._toolsListed.filter(data=>{
                            return data.bay_number==47 && data.is_active == true
                          });
                            this.bay47.forEach(function (value) {
                            if(value.status === 'IN'){
                              $('#bay47').css({fill: "#ffff80"});
                            }
                            else if (value.status === 'ID') {
                              $('#bay47').css({fill: "#ff7f7f"});
                            }
                            else if (value.status === 'PR') {
                              $('#bay47').css({fill: "#c2de80"});
                            }
                            else if (value.status === 'MA') {
                              $('#bay47').css({fill: "#9ac3f5"});
                            }
                            })

                            this.bay48 =  this._toolsListed.filter(data=>{
                              return data.bay_number==48 && data.is_active == true
                            });
                              this.bay48.forEach(function (value) {
                              if(value.status === 'IN'){
                                $('#bay48').css({fill: "#ffff80"});
                              }
                              else if (value.status === 'ID') {
                                $('#bay48').css({fill: "#ff7f7f"});
                              }
                              else if (value.status === 'PR') {
                                $('#bay48').css({fill: "#c2de80"});
                              }
                              else if (value.status === 'MA') {
                                $('#bay48').css({fill: "#9ac3f5"});
                              }
                              })
  

      })

      // this._cumulativeLab = '';
      // this._cumulativeUtilization = this.http.get('assets/json/labUtilization.json').subscribe(data=>{
      //   this._cumulativeLab = data;
      // })

      this._cumulativeLab = '';
      this._data1.dashboardCumulative().subscribe(data =>{
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
    this.toolData.unsubscribe();
    // this._cumulativeUtilization.unsubscribe();
    // this._quaterUtilization.unsubscribe();
  }

  setId(id){
    this.router.navigate(['dashboard/toolinfo'+'/'+id]);
  }

}
