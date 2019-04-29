
package com.ibm.grill.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.ibm.grill.app.model.User;
import com.ibm.grill.app.repository.GrillerRepository;
import com.ibm.grill.app.repository.UserRepository;


//import com.ibm.fixmyship.service.UserServiceImpl;

@Component
public class UserServiceImpl {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	GrillerRepository vidrepo;


	
	/*@Override
	public User save(User user) {
		return userRepo.save(user);
	}

	@Override
	public Optional<User> findByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public Optional<User> findByUsernameOrEmail(String username, String email) {
		return userRepo.findByUsernameOrEmail(username, email);
	}

	@Override
	public List<User> findByIdIn(List<Long> userIds) {
		return userRepo.findByIdIn(userIds);
	}

	@Override
	public Optional<User> findByUsername(String username) {
		return userRepo.findByUsername(username);
	}

	@Override
	public Boolean existsByUsername(String username) {
		return userRepo.existsByUsername(username);
	}

	@Override
	public Boolean existsByEmail(String email) {
		return userRepo.existsByEmail(email);
	}

	@Override
	public Optional<User> findById(Long id) {
		return userRepo.findById(id);
	}*/
	
	public void add(User U) {
		//MultipartFile file=repo.findById(V.getId()).get(). 
		// @formatter:on

		//String filename=
		
		userRepo.save(U);
	}
	
	
	public void update(User U) {
		
		userRepo.save(U);
	}
	
	
	public void delete(Long id) {
		userRepo.delete(userRepo.findById(id).get());
	}
	
	public List<User> list() {
		
			List<User> eU = new ArrayList<>();
			for (User U : userRepo.findAll()) {
				eU.add(U);
			}
			return eU;
		}
		
	
	public User get(long id)
	{
		//return employees.get(empId);
		return userRepo.findById(id).get();
		 
		// @formatter:on

	}
	
	

	public boolean existsByUsername(String username) {
		// TODO Auto-generated method stub
		return false;
	}


	public boolean existsByEmail(String email) {
		// TODO Auto-generated method stub
		return false;
	}


}


//package com.ibm.grill.app.service;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Service;
//
//import com.ibm.grill.app.model.User;
//import com.ibm.grill.app.repository.GrillerRepository;
//import com.ibm.grill.app.repository.UserRepository;
//
////import com.ibm.fixmyship.service.UserServiceImpl;
//
//@Component
//public class UserServiceImpl {
//
//	@Autowired
//	UserRepository userRepo;
//	
//	@Autowired
//	GrillerRepository vidrepo;
//
//	
//
//	public void add(User U) {
//		//MultipartFile file=repo.findById(V.getId()).get(). 
//		// @formatter:on
//
//		//String filename=
//		
//		userRepo.save(U);
//	}
//	
//	
//	public void update(User U) {
//		
//		userRepo.save(U);
//	}
//	
//	
//	public void delete(Long id) {
//		userRepo.delete(userRepo.findById(id).get());
//	}
//	
//	public List<User> list() {
//		
//			List<User> eU = new ArrayList<>();
//			for (User U : userRepo.findAll()) {
//				eU.add(U);
//			}
//			return eU;
//		}
//		
//	
//	public User get(long id)
//	{
//		//return employees.get(empId);
//		return userRepo.findById(id).get();
//		 
//		// @formatter:on
//
//	}
//	
//	
//	public boolean existsByUsername(String username) {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//
//	public boolean existsByEmail(String email) {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//
//}
