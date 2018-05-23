import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel }from '../employeemodel';
import { EmployeeService }  from '../employee.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
 
 @Input() employee: EmployeeModel;
  //employee: Employee[];
   //employee: Employee;
   constructor( private route: ActivatedRoute,private employeeserv : EmployeeService,private location: Location) { 
 
   }
 
   ngOnInit() {
    this.getAll();
   }

  getAll(): void {
    const employeeid = + this.route.snapshot.paramMap.get('employeeid');
    this.employeeserv.getid(employeeid)
    .subscribe(employee => this.employee = employee);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.employeeserv.updateEmployee(this.employee)
      .subscribe(() => this.goBack());
  }


}
