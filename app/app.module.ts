import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeService} from './employee.service'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import {SkillsComponent} from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AddemployeeComponent,
    UpdateEmployeeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
