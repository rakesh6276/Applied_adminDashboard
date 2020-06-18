import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { ToolsComponent } from './tools/tools.component';
import { LoginComponent } from './login/login.component';
import { BayhomeComponent } from './bayhome/bayhome.component';
import { TooinfoComponent } from './tooinfo/tooinfo.component';
import { ToolcatagoryComponent } from './toolcatagory/toolcatagory.component';
import { CategorytableComponent } from './categorytable/categorytable.component';
import { MovetoolsComponent } from './movetools/movetools.component';
import { AuthGuard } from './auth.guard';

import { ReporttableComponent } from './reporttable/reporttable.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';


import { LabtrendComponent } from './labtrend/labtrend.component';


declare var jquery:any;
declare var $ :any;
const routes: Routes = [
{
  path:'dashboard',
  component:DashboardComponent,
  canActivate:[AuthGuard], 

  children: [
      {
        path:'bayhome',
        component:BayhomeComponent,
      },
      { 
        path: 'dashboardhome', 
        component: DashboardhomeComponent
      },
      { 
        path: 'toolcategory', 
        component: ToolcatagoryComponent
      },
      { 
        path: 'categorytable', 
        component: CategorytableComponent
      },
      { 
        path: 'consoles', 
        component: ConsolesComponent
      },
      { 
        path: 'tools', 
        component: ToolsComponent
      },
      { 
        path: 'movetools', 
        component: MovetoolsComponent
      },
      {
        path:'toolinfo/:id',
        component: TooinfoComponent
      },

      {
      path: 'reporttable', 
      component: ReporttableComponent
    },
    {
      path: 'projects', 
      component: ProjectsComponent
    },
    {
      path: 'users', 
      component: UsersComponent
    },
    {
      path: 'labtrend', 
      component: LabtrendComponent
    }

    
    ],
      
    
},
{
  path:'',
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private route:ActivatedRoute,private router:Router) { 
    
  }

  // canActivate() {
  //   if (localStorage.getItem('csrftoken')) {
  //       console.log('CSRFTOKEN EXISTS');
  //       return true;
  //   }
  //   else{
  //     console.log('No TOKEN exists')
  //   this.router.navigate(['']);
  //   return false;
  //   }
  // }

 }
