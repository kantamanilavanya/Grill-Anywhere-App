package com.ibm.grill.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.grill.app.model.RenterRegister;
import com.ibm.grill.app.service.RenterService;

@RestController
@CrossOrigin(origins = "*")
public class RenterRegistrationController {

	@Autowired
	private RenterService renterservice;

	@PostMapping("/rregister")
    public ResponseEntity addOwner(@RequestBody RenterRegister oregister){
        boolean flag = renterservice.add(oregister);
       
        if(!flag) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
	
	
	  @GetMapping("/rregister")
    public ResponseEntity<List<RenterRegister>> getAllPosts(){
        List<RenterRegister> list = renterservice.get();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
	
}
