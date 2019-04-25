package com.ibm.grill.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.model.OwnerRegister;
import com.ibm.grill.app.model.Purchase;

public interface GrillerRepositoryMySQL extends CrudRepository<Griller,Integer>{
	
	@Query("Select g from Griller g where g.grillerType like :grillerType and grillerFlag like:grillerFlag")
	public List<Griller> findByGrillerType(String grillerType, String grillerFlag);
	
	@Query("Select g from Griller g where g.location like :location and grillerFlag like:grillerFlag")
	public List<Griller> findByLocation(String location,String grillerFlag);
	//public List<Griller> findByGrillName(String grillName);
	
	public List<Griller> findByGrillerFlag(String grillerFlag);
	public List<Griller> findByGrillName(String grillName);
	
	@Query("Select g from Griller g where g.grillName like %:name% and grillerFlag like:grillerFlag")
	public List<Griller> findByNameLike(String name,String grillerFlag);

	@Query("Select o.name,o.address from OwnerRegister o INNER JOIN Griller g on o.email=g.owner")
	public List<OwnerRegister> findByOwner(String grillId);
	
	
	
}
