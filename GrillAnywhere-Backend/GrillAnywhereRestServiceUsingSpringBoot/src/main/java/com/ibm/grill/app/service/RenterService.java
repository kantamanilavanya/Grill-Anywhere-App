package com.ibm.grill.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.grill.app.model.RenterRegister;
import com.ibm.grill.app.repository.RenterRepository;

@Service
public class RenterService {

	@Autowired
	private RenterRepository renter;

	public  boolean add(RenterRegister rregister) {

		renter.save(rregister);
		return true;
	}
	public List<RenterRegister> get() {
        return (List<RenterRegister>) renter.findAll();
    }
	
}
