import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import{EmployeeService} from './employee.service';

import{MapWebNotificationService} from '../../map-web-notification/map-web-notification.service'

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {


  form = new FormGroup({});
  model={};

  callBackMsg:string;
  fields: FormlyFieldConfig[] = [
    {
    key: 'name',
    type: 'input',
    templateOptions: {
      type: 'input',
      label: 'Name',
      placeholder: 'Enter Name',
      required: true,
    }
  },
  {
    key: 'address',
    type: 'input',
    templateOptions: {
      type: 'input',
      label: 'Address',
      placeholder: 'Enter Address',
      required: true,
    }
  },
  {
    key: 'phone',
    type: 'input',
    templateOptions: {
      type: 'input',
      label: 'Phone Number',
      placeholder: 'Enter Phone',
      required: true,
    },

  }
  ,
  {
    key: 'ownership',
    type: 'select',
    // className:'flex1',
    templateOptions: {

      label: 'Ownership',
      placeholder: 'Oenwership',
      options: [
              {value: 1,label: 'Test1'},
              {value: 2,label: 'test2'}
            ],
      required: true
    }

  }

];
  constructor(private employeeService:EmployeeService
    , private MapWebNotification:MapWebNotificationService) { }


  ngOnInit() {
  }
  submit(model) {
    console.log(model);
    this.MapWebNotification.openBottomSheet();
    this.employeeService.CreateEmployee(model).subscribe(result => {
      // this.forecasts = result;
      //alert('Employee Created');
      this.callBackMsg="Success!!!"
      this.MapWebNotification.dismissBottomSheet();

    }, error =>
    {
      console.error(error);

      this.callBackMsg="Error has occured";
      this.MapWebNotification.dismissBottomSheet(true);
    }
  );
  }
}
