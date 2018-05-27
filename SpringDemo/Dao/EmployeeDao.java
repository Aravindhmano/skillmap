package com.niit.SpringDemo.Dao;

import java.util.List;

import com.niit.SpringDemo.model.Employee;

public interface EmployeeDao 
{
	public boolean addEmployee(Employee emp);

	public boolean updateEmployee(Employee employeeid);
	public boolean deleteEmployee(int employeeid);
	
	public Employee getUpdateId(int employeeid);
	
	public Employee getEmployeebyId(int employeeid);
	
	public List<Employee>getAll();

//	public Employee getUpdateserv(Employee emp);
	

	
}
