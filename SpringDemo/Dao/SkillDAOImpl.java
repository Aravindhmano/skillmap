package com.niit.SpringDemo.Dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.SpringDemo.model.Skills;




@Repository("skillDAO")
@Transactional
public class SkillDAOImpl implements SkillDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean add(Skills skill) {
		
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().save(skill);
		return true;
		
	}

	@Override
	public boolean delete(Skills skill) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().delete(skill);
		return true;
	}

	@Override
	public boolean update(Skills skill) {
		sessionFactory.getCurrentSession().update(skill);
		return true;
	}

	@Override
	public List<Skills> getAllSkills() {
		// TODO Auto-generated method stub
		return sessionFactory.getCurrentSession().createQuery("from Skills").list();
		
	}

	@Override
	public List<Skills> SearchSkills(String keywords) {
		return sessionFactory.getCurrentSession().createQuery("from Skills where skillName like'%"+ keywords +"%'").list();
	}

	@Override
	public Skills findByEmployeeId(int empId) {
		return (Skills)sessionFactory.getCurrentSession().createQuery("from Skills where employeeid="+empId).uniqueResult();
	}

}
