import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {EMPLOYEES} from './EmployeeList';
import {EmployeeModel} from './employeemodel'
import {HttpClientModule} from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


 

  constructor(private http: HttpClient)
   {
   }

  private restUrl ='http://localhost:8086/MyRestDemo/api/employee';
  private restdel ='http://localhost:8086/MyRestDemo/api/employee/delete';
  private getUrl ='http://localhost:8086/MyRestDemo/api/employee/viewdata';


  getEmployees (): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.restUrl);
  }

   

   addservice (employeee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.restUrl, employeee, httpOptions); 
   }

  //  deleteEmployee (employee: EmployeeModel): Observable<EmployeeModel> {
  //  //const id = typeof employee === 'number' ? employee : employee.employeeid;
  //   const url = this.restdel+'/'+ employee.employeeid;

  //   return this.http.delete<EmployeeModel>(url, httpOptions);
  // }


  deleteEmployee (employee: EmployeeModel | number): Observable<EmployeeModel> {
    const id = typeof employee === 'number' ? employee : employee.employeeid;
    const url = `${this.restdel}/${id }`;

    return this.http.delete<EmployeeModel>(url, httpOptions)
  }


  updateEmployee (employee:EmployeeModel): Observable<any> {
    return this.http.put(this.restUrl,employee, httpOptions);
    
  }

   getid(employeeid: number): Observable<EmployeeModel> {
    const url = `${this.getUrl}/${employeeid}`;
    return this.http.get<EmployeeModel>(url);
  }
  

}
