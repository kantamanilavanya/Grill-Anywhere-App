package com.ibm.grill.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.model.OwnerRegister;

public interface OwnerRepository extends CrudRepository<OwnerRegister,Integer>{

	List<OwnerRegister> findByEmail(String email);

}
