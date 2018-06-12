import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Skills} from './skills_model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import{SkillsComponent} from './skills/skills.component'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SkillsService {


private strUrl ='http://localhost:8086/MyRestDemo/api/skill';  // URL to web api

//private strUrl='api/employee';

//get all list 
getAll(): Observable<Skills[]> {
  //return of(EMPLOYEES);
  return this.http.get<Skills[]>(this.strUrl)
  
}
/** POST: add a new employee to the server */
  addservice (skill: Skills): Observable<Skills> {//observable data services is an angular injectale server
    return this.http.post<Skills>(this.strUrl, skill, httpOptions);
    
  }
  deleteSkill (skills: Skills | number): Observable<Skills> {
    //const url='http://localhost:8080/CEBProjectRestDemo/api/employee/'+employee;
    const id = typeof skills === 'number' ? skills : skills.employeeid;
    const url = `${this.strUrl}/${id}`;

    return this.http.delete<Skills>(url, httpOptions)
  }
  update(empls:Skills): Observable<any> {
    return this.http.put(this.strUrl,empls, httpOptions);
    
  }
   getid(employeeid: number): Observable<Skills> {
    const url = `${this.strUrl}/${employeeid}`;
    return this.http.get<Skills>(url);
  }
  constructor(private http: HttpClient) { }
}
