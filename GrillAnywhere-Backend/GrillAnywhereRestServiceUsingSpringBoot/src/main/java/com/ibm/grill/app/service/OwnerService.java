package com.ibm.grill.app.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.grill.app.model.OwnerRegister;
import com.ibm.grill.app.repository.OwnerRepository;

@Service
public class OwnerService implements OwnerRepository{

	

		@Autowired
		private OwnerRepository owner;

		public  boolean add(OwnerRegister oregister) {

			owner.save(oregister);
			return true;
		}
		public List<OwnerRegister> get() {
	        return (List<OwnerRegister>) owner.findAll();
	    }
		@Override
		public <S extends OwnerRegister> S save(S entity) {
			// TODO Auto-generated method stub
			return null;
		}
		@Override
		public <S extends OwnerRegister> Iterable<S> saveAll(Iterable<S> entities) {
			// TODO Auto-generated method stub
			return null;
		}
		@Override
		public Optional<OwnerRegister> findById(Integer id) {
			// TODO Auto-generated method stub
			return null;
		}
		@Override
		public boolean existsById(Integer id) {
			// TODO Auto-generated method stub
			return false;
		}
		@Override
		public Iterable<OwnerRegister> findAll() {
			// TODO Auto-generated method stub
			return null;
		}
		@Override
		public Iterable<OwnerRegister> findAllById(Iterable<Integer> ids) {
			// TODO Auto-generated method stub
			return null;
		}
		@Override
		public long count() {
			// TODO Auto-generated method stub
			return 0;
		}
		@Override
		public void deleteById(Integer id) {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void delete(OwnerRegister entity) {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void deleteAll(Iterable<? extends OwnerRegister> entities) {
			// TODO Auto-generated method stub
			
		}
		@Override
		public void deleteAll() {
			// TODO Auto-generated method stub
			
		}
	

}
