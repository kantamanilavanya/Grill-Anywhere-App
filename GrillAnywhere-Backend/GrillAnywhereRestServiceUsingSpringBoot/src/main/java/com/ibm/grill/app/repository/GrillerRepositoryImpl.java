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

//	@SuppressWarnings("unchecked")
//	@Override
//	public List<Griller> getGrillerByName(String grillerName) {
//		return this.entityManager.
//				createQuery("select e from Griller e where e.grill_name like '"+grillerName+"'").
//					getResultList();
//	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Griller> findAllbyGrillerFlag(String grillerFlag){
		return this.entityManager.
				createQuery("select e from Griller e where e.grillerFlag like '"+grillerFlag+"'").
					getResultList();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Griller> getGrillerByRenter(String renter) {
		return this.entityManager.
				createQuery("select e.grillName,e.grillerType,e.grillerDescriptions,e.price,e.location,p.renter from Griller e INNER JOIN Purchase p on p.grillId=e.grillId where p.renter like '"+renter+"' ").
					getResultList();
	}
}
