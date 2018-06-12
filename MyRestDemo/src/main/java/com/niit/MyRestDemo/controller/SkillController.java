package com.niit.MyRestDemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.niit.SpringDemo.model.Skills;
import com.niit.SpringDemo.service.SkillService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/skill")
public class SkillController {
	@Autowired
	private SkillService skillService;
	
	/*@GetMapping
	public ResponseEntity<List<Skills>> listAllSkills() {		
		return new ResponseEntity<List<Skills>>(skillService.getAllSkills(), HttpStatus.OK);
	}
	
	//modify this to skillType
	@GetMapping("/{skillId}")
	public ResponseEntity<Skills> getSkill(@PathVariable("skillId") int skillId) {
		
		if(employeeService.findById(empId)!=null) {
			return new ResponseEntity<Employee>(employeeService.findById(empId), HttpStatus.OK);
		}
		else 
			return new ResponseEntity<Employee>(HttpStatus.NOT_FOUND); 
	}
	
	
@PostMapping
	public ResponseEntity<Void> addSkills(@RequestBody Skills skill) {
	
			skillService.add(skill);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		}
	

	@PutMapping
	public ResponseEntity<Void> updateSkill(@RequestBody Skills skill) {
		
		if(skillService.findByEmpId(skill.getEmployeeid())!=null) {
			skillService.update(skill);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		else {
			
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}	*/

	@GetMapping
	 public List<Skills>getAll()
	 {
		 List<Skills>details=skillService.getAllSkills();
		 
		return details;
		 
	 }
	@GetMapping("/{employeeid}")
	 public ResponseEntity<Skills>getEmployees(@PathVariable("employeeid")int employeeid)
	 {
		 if(skillService.findByEmpId(employeeid)!=null)
		 {
			 return new ResponseEntity<Skills>(skillService.findByEmpId(employeeid),HttpStatus.OK);
		 }
		 else
		 {
			 return new ResponseEntity<Skills>(HttpStatus.NOT_FOUND);
			 
		 }
	 }
	 
	
	@PostMapping
	public ResponseEntity<Void> addSkills(@RequestBody Skills skill) {
	
			skillService.add(skill);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		}
	@DeleteMapping("/{employeeid}")
	 public ResponseEntity <Void> deleteEmployee(@PathVariable("employeeid")int employeeid)
	 {
		 if(skillService.findByEmpId(employeeid)!=null)
		 {
			 
			 skillService.delete(employeeid);
			 
			 return new ResponseEntity<Void>(HttpStatus.OK);
			 
		 }
		 else
		 {
			 return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
			 
		 }
	 }
	
	@PutMapping
	public ResponseEntity<Void> update(@RequestBody Skills employee) {
		
		if(skillService.findByEmpId(employee.getEmployeeid())!=null) {
			skillService.update(employee);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		else {
			
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}

}
