import { Component, OnInit } from '@angular/core';
import{Skills} from '../skills_model'

import{SkillsService} from '../skills.service'


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


 empl: Skills;
empls:Skills[];

getAll(): void {
  this.skillsserve.getAll().subscribe(empls => this.empls = empls);
}

add(employeeid:number,employeename:string,skillName:string,certifications:string,studentsTrained:number,studentPlaced:number): void {
   // employeename=employeename;
   //emp.employeeid=employeeid;
   this.empl=new Skills();
   if(employeeid!=0)
   {
  
  this.empl.employeeid=employeeid;
  this.empl.employeename=employeename;
  this.empl.skillName=skillName;
  this.empl.certifications=certifications;
  this.empl.studentsTrained=studentsTrained;
  this.empl.studentPlaced=studentPlaced;
  


  
    this.skillsserve.addservice(this.empl)
      .subscribe(employee => {
        this.empls.push(this.empl);
      });
   }
  }
  delete(skills:Skills): void {
 
    this.empls = this.empls.filter(h => h !== skills);
      this.skillsserve.deleteSkill(skills).subscribe();
  }

  constructor(private skillsserve:SkillsService) { }

  ngOnInit() 
  {
    this.getAll();
  }

}
