package com.niit.SpringDemo.service;

import java.util.List;

import com.niit.SpringDemo.model.Employee;

public interface EmployeeService 
{
	public boolean addservice(Employee emp);
 
	boolean deleteService(int employeeid);
	
	//public Employee getUpdateserv(Employee emp);
	
	public boolean updateEmployee(Employee employeeid);
	  
	public Employee getUpdateservId(int employeeid);
	
	public Employee getEmployeebyId(int employeeid);
	
    public List<Employee> getAll();

	
}

