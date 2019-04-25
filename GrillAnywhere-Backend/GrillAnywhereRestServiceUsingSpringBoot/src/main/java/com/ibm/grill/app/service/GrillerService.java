package com.ibm.grill.app.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.model.Purchase;
import com.ibm.grill.app.repository.GrillerRepositoryMySQL;
import com.ibm.grill.app.repository.PurchaseRepository;




@Service
public class GrillerService {
	

	@Autowired
	private GrillerRepositoryMySQL grillerRepository;
	
	@Autowired
	private PurchaseRepository purchaseRepository;

	public void add(Griller griller) {
//		int empId = employees.size() + 1;	
//		employee.setId(empId);			
//		employees.put(employee.getId(), employee);
		grillerRepository.save(griller);
	}

	public void update(Griller griller) {

//		employees.put(employee.getId(), employee);
		grillerRepository.save(griller);
	}

	public Griller get(int grillID) {
		return grillerRepository.findById(grillID).get();
	}

	public void delete(int grillID) {
		grillerRepository.deleteById(grillID);
	}

	public List<Griller> list(String grillerFlag) {		

		return (List<Griller>) grillerRepository.findByGrillerFlag(grillerFlag);	
	}
	
	public List<Griller> listByGrillerType(String grillerType, String grillerFlag) {		
//		return new ArrayList<Employee>(employees.values());
		return (List<Griller>) grillerRepository.findByGrillerType(grillerType,grillerFlag);
	}
	
//	

	public List<Griller> findByLocation(String location, String grillerFlag)
	{
		return grillerRepository.findByLocation(location,grillerFlag);
	}
//	public List<Griller> findByGrillerType(String grillType)
//	{
//		return grillerRepository.findByGrillerType(grillType);
//	}

	

	public boolean addPurchase(Purchase purchase) {
		// TODO Auto-generated method stub
		purchaseRepository.save(purchase);
		return true;
	}

	public List<Griller> listByRenter(String renter) {
		// TODO Auto-generated method stub
		return (List<Griller>) purchaseRepository.findByRenter(renter);	}

	public List<Griller> findByGrillName(String grillName) {
		// TODO Auto-generated method stub
		return grillerRepository.findByGrillName(grillName);
	}
	
	public List<Griller> findByNameLike(String name,String grillerFlag){
		return grillerRepository.findByNameLike(name,grillerFlag);
	}



	
}