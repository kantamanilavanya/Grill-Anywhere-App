package com.ibm.grill.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.model.Purchase;

public interface PurchaseRepository extends CrudRepository<Purchase,Integer>{

	List<Griller> findByRenter(String renter);

}
