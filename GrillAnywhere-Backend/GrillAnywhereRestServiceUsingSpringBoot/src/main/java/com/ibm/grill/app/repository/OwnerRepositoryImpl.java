package com.ibm.grill.app.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.model.OwnerRegister;

public class OwnerRepositoryImpl implements OwnerRepositoryCustom{

	@PersistenceContext
	private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<OwnerRegister> getOwnerRegisterByEmail(String email) {
		return this.entityManager.
				createQuery("select e from OwnerRegister e where e.email like '"+ email +"'").
					getResultList();
	}
}
