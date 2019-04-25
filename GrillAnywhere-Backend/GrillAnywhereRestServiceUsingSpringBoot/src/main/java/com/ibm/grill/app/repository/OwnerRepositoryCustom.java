package com.ibm.grill.app.repository;

import java.util.List;

import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.model.OwnerRegister;

public interface OwnerRepositoryCustom {

	List<OwnerRegister> getOwnerRegisterByEmail(String email);
}
