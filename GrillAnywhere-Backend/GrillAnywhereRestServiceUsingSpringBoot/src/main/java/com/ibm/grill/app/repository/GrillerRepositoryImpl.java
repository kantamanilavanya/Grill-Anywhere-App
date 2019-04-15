package com.ibm.grill.app.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ibm.grill.app.model.Griller;

public class GrillerRepositoryImpl implements GrillerRepositoryCustom{

	@PersistenceContext
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public List<Griller> getGrillerByType(String grillerType) {
		return this.entityManager.
				createQuery("select e from Griller e where e.location like '"+grillerType+"'").
					getResultList();
	}

}
