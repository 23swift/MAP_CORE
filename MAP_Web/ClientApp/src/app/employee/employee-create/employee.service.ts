import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Employee} from '../model/employee';
import {  Inject } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EmployeeService {
_httpClient:HttpClient;
_baseUrl:string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

   this._httpClient= http;
   this._baseUrl=baseUrl
  }
  CreateEmployee(data){
    // const data:Employee={
    //           Id:0,Name:"Arnold Costamero",Address:"Manila222",Phone:"234234"
    //   };
      console.log(data);
     return this.http.post(this._baseUrl  +'api/Employee',data);

  }
}
