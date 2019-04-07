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
	private GrillerRepositoryMySQL employeeRepository;

	public void add(Griller employee) {
//		int empId = employees.size() + 1;	
//		employee.setId(empId);			
//		employees.put(employee.getId(), employee);
		employeeRepository.save(employee);
	}

	public void update(Griller employee) {

//		employees.put(employee.getId(), employee);
		employeeRepository.save(employee);
	}

	public Griller get(int empId) {
		return employeeRepository.findById(empId).get();
	}

	public void delete(int empId) {
		employeeRepository.deleteById(empId);
	}

	public List<Griller> list() {		

		return (List<Griller>) employeeRepository.findAll();
	}
	
	
	

	
}
