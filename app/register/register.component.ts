import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from '../employeemodel';
import {EMPLOYEES} from '../EmployeeList'
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee:EmployeeModel[];

  constructor(private employeeservice:EmployeeService) { }

  getemployees(): void {
    this.employeeservice.getEmployees()
        .subscribe(employe => this.employee = employe);
  }

  // delete(employee:EmployeeModel): void {

  //  // this.employee= this.employee.filter(h => h !== employee);
  //  this.employeeservice.deleteEmployee(employee).subscribe();
  // }



  delete(employee:EmployeeModel): void {
   this.employee = this.employee.filter(h => h !== employee);
     this.employeeservice.deleteEmployee(employee).subscribe();
 }


  ngOnInit() {
    this.getemployees();
  }

}
