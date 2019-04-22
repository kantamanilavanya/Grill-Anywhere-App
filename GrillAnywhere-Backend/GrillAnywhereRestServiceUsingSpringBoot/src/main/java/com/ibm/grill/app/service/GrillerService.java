package com.ibm.grill.app.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.repository.GrillerRepositoryMySQL;




@Service
public class GrillerService {
	

	@Autowired
	private GrillerRepositoryMySQL grillerRepository;

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

	public List<Griller> list() {		

		return (List<Griller>) grillerRepository.findAll();
	}
	
	public List<Griller> listByGrillerType(String grillerType) {		
//		return new ArrayList<Employee>(employees.values());
		return (List<Griller>) grillerRepository.findByGrillerType(grillerType);
	}
	

	public List<Griller> findByLocation(String location)
	{
		return grillerRepository.findByLocation(location);
	}
//	public List<Griller> findByGrillerType(String grillType)
//	{
//		return grillerRepository.findByGrillerType(grillType);
//	}
	
}