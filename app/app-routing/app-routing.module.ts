import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { RouterModule,Router, Routes} from '@angular/router';
import { AppComponent} from '../app.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import {SkillsComponent} from '../skills/skills.component';
import {SkillsDetailsComponent} from '../skills-details/skills-details.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'viewemployee', component: AddemployeeComponent },
  { path: 'update/:employeeid', component:UpdateEmployeeComponent},
  { path: 'skills', component:SkillsComponent},
  { path: 'details/:employeeid', component:SkillsDetailsComponent},
  { path: 'SkillsDetailsComponent', component:SkillsDetailsComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
 
})
export class AppRoutingModule { }
