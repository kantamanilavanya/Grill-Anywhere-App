package com.ibm.grill.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ibm.grill.app.model.Griller;

public interface GrillerRepositoryMySQL extends CrudRepository<Griller,Integer>{
	
	//public List<Griller> findByDepartment(String department);

}
