import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { ConsolesComponent } from './consoles/consoles.component';
import { ToolsComponent, ModalContentComponent } from './tools/tools.component';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { FormsModule,FormGroup,  FormControl } from '@angular/forms';
import { AlertModule,PopoverModule,ModalModule,BsDropdownModule } from 'ngx-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataService } from './data.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { MomentService } from './moment.service';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { BayhomeComponent } from './bayhome/bayhome.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { TooinfoComponent } from './tooinfo/tooinfo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ToolcatagoryComponent } from './toolcatagory/toolcatagory.component';
import { CategorytableComponent } from './categorytable/categorytable.component';
import { OrderModule } from 'ngx-order-pipe';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { MovetoolsComponent } from './movetools/movetools.component';
import { UiScrollModule } from 'ngx-ui-scroll';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ChartModule } from 'angular-highcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReporttableComponent } from './reporttable/reporttable.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { LabtrendComponent } from './labtrend/labtrend.component';
declare var jquery:any;
declare var $ :any;

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardhomeComponent,
    ConsolesComponent,
    ToolsComponent,
    LoginComponent,
    BayhomeComponent,
    ModalContentComponent,
    TooinfoComponent,
    ToolcatagoryComponent,
    CategorytableComponent,
    MovetoolsComponent,
    ReporttableComponent,
    ProjectsComponent,
    UsersComponent,
    LabtrendComponent,



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    InlineEditorModule,
    FormsModule,
    AlertModule.forRoot(),PopoverModule.forRoot(),ModalModule.forRoot(),
    BsDropdownModule.forRoot(),PaginationModule.forRoot(),NgxPaginationModule,
    Ng2SmartTableModule,NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),OrderModule,DragulaModule,UiScrollModule,InfiniteScrollModule,ChartModule,
    Ng2SearchPipeModule
 
  ],
  entryComponents:[ModalContentComponent],
  providers: [DataService,CookieService,MomentService,AuthGuard,
    {provide:LocationStrategy, useClass:HashLocationStrategy},
  {provide:HTTP_INTERCEPTORS,
  useClass:TokenInterceptorService,
multi:true}],
  bootstrap: [AppComponent]

})
export class AppModule { }
