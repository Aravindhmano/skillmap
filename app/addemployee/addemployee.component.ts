import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from '../employeemodel';
import {EMPLOYEES} from '../EmployeeList'
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private employeservice:EmployeeService) { }

  ngOnInit() {
  }

  employe: EmployeeModel;
  employee:EmployeeModel[];



  add(employeeid:number,employeename:string,email:string,pass:string,age:number,mobile:string,gender:string,qualification:string): void {
  
    this.employe=new EmployeeModel();
    if(employeeid!=0)
    {
   this.employe.employeeid=employeeid;
   this.employe.employeename=employeename;
   this.employe.email=email;
   this.employe.pass=pass;
   this.employe.age=age;
   this.employe.mobile=mobile;
   this.employe.gender=gender;
   this.employe.qualification=qualification;

 
   this.employeservice.addservice(this.employe)
   .subscribe(employee => {this.employee.push(this.employe);});

    }
   }



   


}

