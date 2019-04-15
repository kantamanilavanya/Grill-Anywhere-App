package com.ibm.grill.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.grill.app.model.RenterRegister;
import com.ibm.grill.app.repository.RenterRepository;

@Service
public class RenterService implements RenterRepository{

	@Autowired
	private RenterRepository renter;

	public  boolean add(RenterRegister rregister) {

		renter.save(rregister);
		return true;
	}
	public List<RenterRegister> get() {
        return (List<RenterRegister>) renter.findAll();
    }
	@Override
	public <S extends RenterRegister> S save(S entity) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public <S extends RenterRegister> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Optional<RenterRegister> findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean existsById(Integer id) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public Iterable<RenterRegister> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Iterable<RenterRegister> findAllById(Iterable<Integer> ids) {
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
	public void delete(RenterRegister entity) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void deleteAll(Iterable<? extends RenterRegister> entities) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}
}