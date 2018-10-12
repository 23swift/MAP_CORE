import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import{Employee} from '../model/employee'
import { EmployeePaged } from '../model/employeePaged';
@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
public employees:Employee[];
url:string
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url=baseUrl;
    // http.get<Employee[]>(baseUrl + 'api/Employee').subscribe(result => {
    //   alert( JSON.stringify(result) );

    //   return this.employees = result;

    //  }, error => console.error(error));
  }

  getEmployees(){

    return this.http.get<Employee[]>(this.url + 'api/Employee');
  }
  getPagedEmployees(_pageIndex:string,_pageSize:string, sortedBy: string, direction:string){
    var _params:HttpParams = new HttpParams().set("_pageSize",_pageSize).set("_pageIndex",_pageIndex)
    .set("sortedBy",sortedBy).set("direction",direction);

    var options = { params: _params };

        return this.http.get<EmployeePaged>(this.url + 'api/Employee/GetPaged',options);
  }

}

// export interface  Employee {
//   id:number;
//   name:string;
//   address:string;
//   phone:string;
//   ownership:number;
// }
