package com.niit.SpringDemo.service;

import java.util.List;

import com.niit.SpringDemo.model.Skills;



public interface SkillService {
	boolean add(Skills skill);
	boolean delete(Skills skil);
	boolean update(Skills profile);	
	List<Skills> getAllSkills(); 
	List<Skills> SearchSkills(String keywords);
}
