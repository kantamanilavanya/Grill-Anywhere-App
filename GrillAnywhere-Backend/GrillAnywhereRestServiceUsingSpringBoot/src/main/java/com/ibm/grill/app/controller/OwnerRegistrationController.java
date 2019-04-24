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

import com.ibm.grill.app.model.OwnerRegister;
import com.ibm.grill.app.service.OwnerService;

@RestController
@CrossOrigin(origins = "*")
public class OwnerRegistrationController {


	@Autowired
	private OwnerService ownerservice;

	@PostMapping("/oregister")
    public ResponseEntity addOwner(@RequestBody OwnerRegister oregister){
        boolean flag = ownerservice.add(oregister);
       
        if(!flag) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
	
	
	  @GetMapping("/oregister")
    public ResponseEntity<List<OwnerRegister>> getAllPosts(){
        List<OwnerRegister> list = ownerservice.get();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
	
}
