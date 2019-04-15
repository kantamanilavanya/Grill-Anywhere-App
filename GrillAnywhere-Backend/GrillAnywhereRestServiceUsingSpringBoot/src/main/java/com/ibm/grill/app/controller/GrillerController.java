package com.ibm.grill.app.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.grill.app.exception.LoginException;
import com.ibm.grill.app.exception.ValidationException;
import com.ibm.grill.app.model.ErrorDetails;
import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.service.GrillerService;

/**
 * Handles requests for the employee management.
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/griller")
public class GrillerController {

	static String UPLOAD_DIR="uploads";
	@Autowired
	@Qualifier("grillerValidator")
	private Validator validator;

	@Autowired
	GrillerService grillService;

	@InitBinder
	private void initBinder(WebDataBinder binder) {
		binder.setValidator(validator);
	}

//	@CrossOrigin(origins = "*")
//	@PostMapping
//	public ResponseEntity<String> addGriller(@RequestParam("file") MultipartFile file,@RequestParam("grill") String grill) throws JsonParseException, JsonMappingException, IOException{
//		Griller griller=new ObjectMapper().readValue(grill, Griller.class);
//		griller.setGrillerIcon(file.getBytes());
//		griller.setGrillerFileName(file.getOriginalFilename());
//		grillService.add(griller);
//		return new ResponseEntity<String>("added successfull",HttpStatus.OK);
//	}
	
	
	@CrossOrigin(origins = "*")
	//@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	 @PostMapping
	public HttpEntity<? extends Object> addGriller(@RequestBody Griller griller, WebRequest request,
			HttpSession session, BindingResult bindingResult)
			throws LoginException, ValidationException, URISyntaxException, IOException {
			
			
			
		
		/*
		 * MultipartFile originalPic =griller.getGrillImage(); byte[] ImageInByte =
		 * originalPic.getBytes();
		 */

		validator.validate(griller, bindingResult);

		if (bindingResult.hasErrors()) {
			throw new ValidationException(bindingResult);
		}

		grillService.add(griller);

		// return new ResponseEntity<String>(empId, HttpStatus.CREATED);
		URI locationUri = new URI("/SpringRESTEmployeeCRUDEx/griller/" + griller.getGrillId());
		return ResponseEntity.created(locationUri).build();
//		return new ResponseEntity<Employee>(employee, HttpStatus.OK);		
	}

	@CrossOrigin(origins = "*")
	@GetMapping
	public HttpEntity<List<Griller>> listGrillers(HttpSession session) {

		return new ResponseEntity<List<Griller>>(grillService.list(), HttpStatus.OK);
	}
	
	//daminee's part
	@CrossOrigin(origins = "*")
	@GetMapping("byID/{id}")
	public HttpEntity<List<Griller>> getGriller(@PathVariable int id, HttpSession session) {

		return new ResponseEntity<List<Griller>>((List<Griller>) grillService.get(id), HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/byGrillerType/{grillerType}")
	public HttpEntity<List<Griller>> getGriller(@PathVariable String grillerType , HttpSession session) {

		return new ResponseEntity<List<Griller>>((List<Griller>) grillService.findByGrillerType(grillerType), HttpStatus.OK);
	}
	@CrossOrigin(origins = "*")
	@GetMapping("/byGrillerLocation/{location}")
	public HttpEntity<List<Griller>> getGrillerType(@PathVariable String location , HttpSession session) {

		return new ResponseEntity<List<Griller>>((List<Griller>) grillService.findByLocation(location), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/byPrice/{price}")
	public HttpEntity<List<Griller>> getPrice(@PathVariable Double price , HttpSession session) {

		return new ResponseEntity<List<Griller>>((List<Griller>) grillService.findByPrice(price), HttpStatus.OK);
	}
	
	
	
	
	
	
//
//	@CrossOrigin(origins = "*")
//
//	@GetMapping("byID/{id}")
//	public HttpEntity<List<Griller>> getGriller(@PathVariable int id, HttpSession session) {
//
//		return new ResponseEntity<List<Griller>>((List<Griller>) grillService.get(id), HttpStatus.OK);
//	}

	@CrossOrigin(origins = "*")
	@PutMapping("/{id}")
	public HttpEntity<? extends Object> updateGriller(@RequestBody Griller griller, @PathVariable int id,
			WebRequest request, HttpSession session, BindingResult bindingResult) throws ValidationException {

		validator.validate(griller, bindingResult);

		if (bindingResult.hasErrors()) {
			throw new ValidationException(bindingResult);
		}

		griller.setGrillId(id);
		grillService.update(griller);

		return new ResponseEntity<String>("{\"Status\":\"Success\"}", HttpStatus.OK);
//		return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@DeleteMapping("/{id}")
	public HttpEntity<String> deleteGriller(@PathVariable int id, HttpSession session) {

		grillService.delete(id);

		return new ResponseEntity<String>("{\"Status\":\"Success\"}", HttpStatus.OK);
	}

	private boolean isAuthenticated(HttpSession session) {
		return session.getAttribute("userName") != null;
	}

	@ExceptionHandler(ValidationException.class)
	public HttpEntity<ErrorDetails> handleValidationError(ValidationException ex, WebRequest request) {
		StringBuilder validationErrors = new StringBuilder("Validation Error(s): ");
		ex.getValError().getFieldErrors()
				.forEach(item -> validationErrors.append(item.getDefaultMessage()).append(" "));

		ErrorDetails errorDetails = new ErrorDetails(new Date(), validationErrors.toString(),
				request.getDescription(false));

		return new ResponseEntity<ErrorDetails>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
