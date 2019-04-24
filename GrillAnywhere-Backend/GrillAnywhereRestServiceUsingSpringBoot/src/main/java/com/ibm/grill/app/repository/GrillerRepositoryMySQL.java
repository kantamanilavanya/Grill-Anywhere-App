package com.ibm.grill.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.model.Purchase;

public interface GrillerRepositoryMySQL extends CrudRepository<Griller,Integer>{
	
	public List<Griller> findByGrillerType(String grillerType);
	public List<Griller> findByLocation(String location);
	//public List<Griller> findByGrillName(String grillName);
	
	public List<Griller> findByGrillerFlag(String grillerFlag);
	
	
	
}
