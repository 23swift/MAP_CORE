import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
// import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {EmployeeService} from './employee/employee-create/employee.service';
import {MatButtonModule,MatProgressSpinnerModule,
  MatBottomSheetModule,MatSnackBarModule,MatIconModule,MatListModule,
  MatTableModule, MatTableDataSource,MatPaginatorModule,MatSortModule} from '@angular/material';
import {LoadingSpinnerComponent} from '../app/loading-spinner/loading-spinner.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { MapWebHttpClientComponent } from './map-web-http-client/map-web-http-client.component';


@NgModule({

  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EmployeeCreateComponent,
    LoadingSpinnerComponent,
    SnackBarComponent,
    EmployeeListComponent,
    MapWebHttpClientComponent,


  ],
  entryComponents:[LoadingSpinnerComponent,SnackBarComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
   //FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'employee-create', component: EmployeeCreateComponent },
      {path:'employee-list',component:EmployeeListComponent}
    ]),
    BrowserAnimationsModule,
    // FormlyBootstrapModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    // MatPaginator,
    // MatTableDataSource



  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
