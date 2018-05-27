package com.niit.SpringDemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.niit.SpringDemo.Dao.EmployeeDao;
import com.niit.SpringDemo.model.Employee;


@Service
public class EmployeeServicesImpls implements EmployeeService
{
 
	@Autowired
	private EmployeeDao employeedao;
	
	public boolean addservice(Employee emp) {
		
		return (employeedao.addEmployee(emp));	
			
		
	}

	@Override
	public boolean deleteService(int employeeid) {

		
			return (employeedao.deleteEmployee(employeeid));
		
	}


	

	@Override
	public List<Employee> getAll() {
		
		return(employeedao.getAll());
		
	}

	@Override
	public Employee getEmployeebyId(int employeeid) 
	{
		 return(employeedao.getEmployeebyId(employeeid));
	}

	@Override
	public boolean updateEmployee(Employee employeeid) {
		// TODO Auto-generated method stub
		return(employeedao.updateEmployee(employeeid));
	}

	@Override
	public Employee getUpdateservId(int employeeid) {
		// TODO Auto-generated method stub
		 return(employeedao.getUpdateId(employeeid));
	}

//	@Override
//	public Employee getUpdateserv(Employee emp) {
//		
//		return (employeedao.getUpdateserv(emp));
//	}

	
	

	

	

	

	

}
