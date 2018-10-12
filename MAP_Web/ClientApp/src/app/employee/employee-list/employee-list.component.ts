import { Component, OnInit,ViewChild } from '@angular/core';
import{EmployeeListService} from './employee-list.service'
import {MatPaginator,MatTableDataSource,PageEvent,Sort,MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import{Employee} from '../model/employee'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
_employeesList:Employee[];
ELEMENT_DATA: Employee[] ;
displayedColumns: string[] = ['name','address', 'phone'];
dataSource:MatTableDataSource<Employee>;
// MatPaginator Output
pageEvent: PageEvent;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  constructor(private employeeService:EmployeeListService) {

  }
  resultsLength = 0;
  baseIndex:number=0;
  baseSize:number=5;
  pageSize:number=5;
  isLoadingResults = false;
  sortedData: Employee[];
  result:any;
  sortActive:string="name";
  sortDirection:string="asc";
  ngOnInit() {
// this.isLoadingResults=true;
this.paginator.pageIndex=0;
this.paginator.pageSize=5;

// this.sort.sortChange.subscribe(() => {this.paginator.pageIndex = 0; alert(this.sort.active);});
    this.result= merge(this.sort.sortChange, this.paginator.page)
    .pipe(startWith({}),
    switchMap(() => {
      this.isLoadingResults = true;
      // return this.getRepoIssues(
      //   this.sort.active, this.sort.direction, this.paginator.pageIndex);

      // alert( JSON.stringify(this.sort.active) );
      return this.getPagedData2(this.paginator.pageIndex,this.paginator.pageSize,this.sort.active,this.sort.direction);
    }),
      map(data=>{

        // this._employeesList = data.employees;
        // this.sortedData=result.employees;
        this.resultsLength=data.totalCount;
        // this.pageSize=_pageEvent.pageSize;
        this.isLoadingResults=false;
        return data.employees;
      })


    ).subscribe(data => this._employeesList = data);;

// alert( JSON.stringify(this.result) );

    // this.employeeService.getPagedEmployees(this.baseIndex.toString(),this.baseSize.toString()).subscribe(result => {

    //   this._employeesList = result.employees;
    //   this.resultsLength=result.totalCount;
    //   this.pageSize=this.baseSize;
    //   this.sortedData=result.employees;



    //   // this.isLoadingResults=false;

    //  }, error => {console.error(error);this.isLoadingResults=false;});


  }
  getServerData(_pageEvent:PageEvent){
    alert(_pageEvent.pageIndex);
  }
  getPagedData(_pageEvent:PageEvent){
    this.isLoadingResults=true;
    this.employeeService.getPagedEmployees(_pageEvent.pageIndex.toString(),_pageEvent.pageSize.toString(),"name","asc").subscribe(result => {
      this._employeesList = result.employees;
      this.sortedData=result.employees;
      this.resultsLength=result.totalCount;
      this.pageSize=_pageEvent.pageSize;
      this.isLoadingResults=false;
      // alert(JSON.stringify(result))

     }, error => console.error(error));

  }
  getPagedData2(_pageIndex:number , _pageSize:number,sortedBy:string,direction:string){
    // this.isLoadingResults=true;
    return this.employeeService.getPagedEmployees(_pageIndex.valueOf().toString(),_pageSize.valueOf().toString(),sortedBy,direction);

  }
    // alert( JSON.stringify(this.employeeService.employees) );
    sortData(sort: Sort) {
      // const data = this._employeesList.slice();
      const data = this._employeesList;
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }
      switch (sort.active) {
        case 'name': this.httpSort(sort.active);
        case 'address': this.httpSort(sort.active);
        case 'phone': this.httpSort(sort.active);

        default: return 0;
      }
      // this.sortedData = data.sort((a, b) => {
      //   const isAsc = sort.direction === 'asc';
      //   switch (sort.active) {
      //     case 'name': this.httpSort(sort.active);
      //     case 'address': return compare(a.address, b.address, isAsc);
      //     case 'phone': return compare(a.phone, b.phone, isAsc);

      //     default: return 0;
      //   }
      // });
    }

    httpSort(sortBy:string){
        alert(sortBy);
    }

  }

  function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

