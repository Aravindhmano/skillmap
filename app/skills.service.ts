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

  constructor(private http: HttpClient) { }
}
