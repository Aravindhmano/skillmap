package com.niit.SpringDemo.Dao;

import java.util.List;

import com.niit.SpringDemo.model.Skills;




public interface SkillDAO {
	boolean add(Skills skill);
	boolean delete(Skills skill);
	boolean update(Skills skill);	
	Skills findByEmployeeId(int empId);
	List<Skills> getAllSkills(); 
	List<Skills> SearchSkills(String keywords);
}
