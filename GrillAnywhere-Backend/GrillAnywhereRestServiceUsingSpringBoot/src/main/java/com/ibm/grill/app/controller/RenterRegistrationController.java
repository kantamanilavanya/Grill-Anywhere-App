package com.ibm.grill.app.controller;


import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import com.ibm.grill.app.exception.LoginException;
import com.ibm.grill.app.exception.ValidationException;
import com.ibm.grill.app.model.RenterRegister;
import com.ibm.grill.app.service.RenterService;


@RestController
@CrossOrigin(origins = "*")
public class RenterRegistrationController {

//	@Autowired
//	@Qualifier("ownerValidator")
//	private Validator validator;

	
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
	
//	@InitBinder
//	private void initBinder(WebDataBinder binder) {
//		binder.setValidator(validator);
//	}
//
//	@CrossOrigin(origins = "*")
//	//@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//	 @PostMapping
//	public HttpEntity<? extends Object> addGriller(@RequestBody RenterRegister owner, WebRequest request,
//			HttpSession session, BindingResult bindingResult)
//			throws LoginException, ValidationException, URISyntaxException, IOException {
//
//		
//		/*
//		 * MultipartFile originalPic =griller.getGrillImage(); byte[] ImageInByte =
//		 * originalPic.getBytes();
//		 */
//
//		validator.validate(owner, bindingResult);
//
//		if (bindingResult.hasErrors()) {
//			throw new ValidationException(bindingResult);
//		}
//
//		ownerservice.add(owner);
//
//		// return new ResponseEntity<String>(empId, HttpStatus.CREATED);
//		URI locationUri = new URI("/SpringRESTEmployeeCRUDEx/owner/" + owner.getId());
//		return ResponseEntity.created(locationUri).build();
////		return new ResponseEntity<Employee>(employee, HttpStatus.OK);		
//	}

	

}