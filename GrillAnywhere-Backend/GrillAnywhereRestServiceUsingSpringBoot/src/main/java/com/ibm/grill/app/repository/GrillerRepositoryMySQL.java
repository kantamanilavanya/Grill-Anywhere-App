package com.ibm.grill.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.ibm.grill.app.model.Griller;

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

	@Query("Select g from Griller g where grillerFlag like:grillerFlag")
	public List<Griller> findRentedGriller(String grillerFlag);
	@Transactional
    @Modifying
	@Query("update Griller g set g.grillerFlag = :grillerFlag where g.grillId like:grillId")
	public Integer changeFlag(@Param("grillId") Integer grillId,  @Param("grillerFlag")String grillerFlag);
	


	
	
	
}
