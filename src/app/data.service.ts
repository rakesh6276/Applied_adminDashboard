import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Response,RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "rxjs/Rx";
import {IConsoles} from "./dashboardhome/consolesInterface"
import { CookieService } from 'ngx-cookie-service';



@Injectable()
export class DataService {


  //apiRoot: string = "http://152.135.122.61:8871";

  apiRoot: string = "http://152.135.122.61:8871";
  
  //apiRoot: string = "http://152.135.122.61:8871";

  //  idToken = localStorage.getItem('csrftoken');
  //  options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.idToken}) };

  

constructor(private http:HttpClient,private cookie:CookieService
){
}
  
   
    // getConsoles():Observable<any>{
    //   return this.http.get('assets/json/consoles.json').map((response:Response)=>{
    //     console.log(response);
    //     return response;
        
    //   }).catch(this.handleError);
    // }

    getConsoles():Observable<IConsoles[]>{
      return this.http.get(this.apiRoot+'/api/getconsoles/').map((response:Response)=>{
        return response;
        
      }).catch(this.handleError);
    }


    getTools():Observable<any>{
      
    return this.http.get(this.apiRoot+'/api/test_tool_list/').map((response:Response)=>{
        return response;
      }).catch(this.handleError);
    }
    
    getAllTools():Observable<any>{
      return this.http.get(this.apiRoot+'/api/gettools').map((response:Response)=>{
        return response;
      }).catch(this.handleError);
    }

    // sendIdGetToolPage(id){
    //   return this.http.get(this.apiRoot+'/api/test_tool_detail/'+id+'/').map((response:Response)=>{
    //     return response;
    //   }).catch(this.handleError)
    // }

    sendIdGetToolPage(id){
      return this.http.get(this.apiRoot+'/api/baytool/?bid='+id).map((response:Response)=>{
        return response;
      }).catch(this.handleError)
    }

    sendIdGetUsers(id){
      return this.http.post(this.apiRoot+'/api/tools/'+id+'/user_utilization/',id).map((response:Response)=>{
        return response;
      }).catch(this.handleError);
    }

    sendIdGetProjects(id){
      return this.http.post(this.apiRoot+'/api/tools/'+ id + '/project_utilization/',id).map((response:Response)=>{
      return response;
      }).catch(this.handleError);
    }

    sendIdGetImage(imgObj){
      return this.http.put(this.apiRoot+"/api/toolimageupload/",imgObj).map((response:Response)=>{
        return response;
      }).catch(this.handleError);
    }

    getAllprojects(){
      return this.http.get(this.apiRoot+'/api/projects').map((response:Response)=>{
          return response;

      }).catch(this.handleError);
    }

    saveNewProjects(data){
      return this.http.post(this.apiRoot+'/api/projects/',data).map((response:Response)=>{
        return response;
      }).catch(this.handleError)
    }
    assignprojects(data,id){
      return this.http.post(this.apiRoot+'/api/projects/'+id+'/assign-users/',data).map((response:Response)=>{
        return response;
      })
    }
    getlabtrends(pickers){
 
      let startdate=pickers.startDate;
      let enddate=pickers.endDate;
     
      return this.http.get(this.apiRoot+'/api/api_trends_overall/?start_date=' + 
      startdate.format('YYYY-MM-DD') +'&end_date='+ enddate.format('YYYY-MM-DD')).map((response:Response)=>{
        return response;
      })
    
    }
    projectedited(data){
      return this.http.put(this.apiRoot+'/api/projects/'+data.id+'/',data).map((response:Response)=>{
        return response;
      })
    
    }

    toolassignusers(data,id){
      return this.http.post(this.apiRoot+'/api/tools/'+id+'/users/',data).map((response:Response)=>{
        return response;
      })
    }


   
    // assignuserstool(data){
    //   return this.http.get(this.apiRoot+'/api/tools/users/',data).map((response:Response)=>{
    //     return response;
    //   })
    // }



    toolprojects(data,id){
      return this.http.post(this.apiRoot+'/api/tools/'+id+'/assign-projects/',data).map((response:Response)=>{
        return response;
      })
    }
    
  

   callLogin(data){
   return this.http.post(this.apiRoot+'/api-token-auth/',data).map((response:Response)=>{
    return response;
    }).catch(this.handleError)
  }


  UpdateBays(data){
    return this.http.put(this.apiRoot+"/api/movebaytools/",data).map((response:Response)=>{
      return response;
    }).catch(this.handleError)
  }

  toolCategoryList(){
    return this.http.get(this.apiRoot+'/api/tool_category_list/').map((response:Response)=>{
      return response;
    }).catch(this.handleError)
  }

  updateConsoles(data){
    return this.http.put(this.apiRoot+"/api/updatebay/"+data.id+'/',data).map((response:Response)=>{
      return response;
      }).catch(this.handleError)
  }


  getToolUtilization(id){
    return this.http.post(this.apiRoot+"/api/tools/"+ id +'/utilization/',id).map((response:Response)=>{
      return response;
    }).catch(this.handleError)
  }

  getQtrToolUtilization(id){
    return this.http.put(this.apiRoot+"/api/tools/"+ id +'/tool_utilization_qtr/',id).map((response:Response)=>{
      return response;
    })
  }

  changestatus(data){
    return this.http.put(this.apiRoot+"/api/changestatus/",data).map((response:Response)=>{
      return response;
    }).catch(this.handleError)
  }

  sendDateGetTrends(trend){
    return this.http.put(this.apiRoot+'/api/tools/'+ trend.id +'/trend/?start_date='+ trend.startDate +'&end_date='+ trend.endDate,
    trend).map((response:Response)=>{
      return response;
    }).catch(this.handleError)
  }

  getOwners(){
		return this.http.get(this.apiRoot+'/api/gettoolowners/').map((response:Response)=>{
      return response;
    }).catch(this.handleError)
  }
  
  getToolCategory(){
    return this.http.get(this.apiRoot+'/api/gettoolcat/').map((response:Response)=>{
      return response;
    }).catch(this.handleError)
}

saveNewTools(data){
    return this.http.post(this.apiRoot+'/api/savenewtools/',data).map((response:Response)=>{
      return response;
    }).catch(this.handleError)
}

loggedIn(){
  return !!localStorage.getItem('csrftoken');
}

getToken(){
  return localStorage.getItem('csrftoken');
}

dashboardCumulative(){
  return this.http.get(this.apiRoot+'/api/tools/'+'lab_utilization/').map((response:Response)=>{
    return response;
  })
}

dashboardQuaterly(){
  return this.http.get(this.apiRoot+'/api/tools/'+'lab_utilization_qtr/').map((response:Response)=>{
    return response;
  })
}

swapTools(data){
  return this.http.put(this.apiRoot+'/api/swaptools/',data).map((response:Response)=>{
    return response;
  }).catch(this.handleError)
}


getProjectReport(): Observable<any> {
  return this.http.get(this.apiRoot+'/api/export_project_xls').map((response: Response)=> {
      // const todos = response.json();
      // return todos.map((todo) => new Todo(todo));
    return response;
    })
}


sendDateGetReprts(data) {
  return this.http.post(this.apiRoot+'/api/export_tool_xls/?start_date=' + data.startDate +'&end_date='+ data.endDate,data).map((response:Response)=>{
    return response;
  })
}

getAllusers():Observable<any>{
     
  return this.http.get(this.apiRoot+'/api/user/user_info').map((response:Response)=>{
        return response;
  }).catch(this.handleError);
}

getProjectList(){
  return this.http.get(this.apiRoot+'/api/getprojects/').map((response:Response)=>{
    return response;
  }).catch(this.handleError)
}

saveNewuser(data){
  return this.http.post(this.apiRoot+'/api/user/user_info/',data).map((response:Response)=>{
    return response;
  }).catch(this.handleError)
}



getgroups(){

  return this.http.get(this.apiRoot+'/api/user/usergroup/').map((response:Response)=>{
    return response;
  })

}
uploadImage(data){
  return this.http.post(this.apiRoot+'/api/image',data).map((response:Response)=>{
    return response;
  }).catch(this.handleError)
}

filterCategorytable(data){
  return this.http.get(this.apiRoot+'/api/tool_category_list/?start_date='+data.start_date+'&end_date='+data.end_date).map((response:Response)=>{
    return response;
  }).catch(this.handleError)
}

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }


}
  
    
