package com.ibm.grill.app.repository;

import java.util.List;

import com.ibm.grill.app.model.Griller;

public interface GrillerRepositoryCustom {

	List<Griller> getGrillerByType(String grillerType);

	List<Griller> getGrillerByName(String grillName);
	List<Griller> findAllbyGrillerFlag(String grillerFlag);

	List<Griller> getGrillerByRenter(String grillerType);
}
