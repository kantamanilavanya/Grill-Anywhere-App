package com.ibm.grill.app.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MultipartFile;

import com.ibm.grill.app.exception.LoginException;
import com.ibm.grill.app.exception.ValidationException;
import com.ibm.grill.app.model.ErrorDetails;
import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.model.Purchase;
import com.ibm.grill.app.service.GrillerService;

/**
 * Handles requests for the employee management.
 */
@RestController
@RequestMapping(value = "/griller")
public class GrillerController {

	
	
//	@Autowired
//	@Qualifier("grillerValidator")
//	private Validator validator;

	@Autowired
	GrillerService grillService;

//	@InitBinder
//	private void initBinder(WebDataBinder binder) {
//		binder.setValidator(validator);
//	}
	
	@GetMapping("/status")
	@ResponseBody
	public String status() {
		return "Running fine";
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Griller> UploadFile(@RequestPart MultipartFile file, WebRequest request,
			@ModelAttribute Griller griller, HttpSession session, BindingResult bindingResult)
			throws IOException, URISyntaxException, ValidationException {

		//validator.validate(griller, bindingResult);

		if (bindingResult.hasErrors()) {
			throw new ValidationException(bindingResult);
		}

		griller.setGrillImage(file.getOriginalFilename());
		grillService.add(griller);
		URI locationUri = new URI("/SpringRESTEmployeeCRUDEx/griller/" + griller.getGrillId());
		return ResponseEntity.created(locationUri).build();
		// Upload Logic
	}
	

	@CrossOrigin(origins = "*")
	@GetMapping("/byGrillerType/{grillerType}")
	public HttpEntity<List<Griller>> getEmployee(@PathVariable String grillerType, HttpSession session) {

		String grillerFlag="A";
		return new ResponseEntity<List<Griller>>(grillService.listByGrillerType(grillerType,grillerFlag), HttpStatus.OK);
	}
	
	
	
	@CrossOrigin(origins = "*")
	@GetMapping
	public HttpEntity<List<Griller>> listGrillers(HttpSession session) {

		String grillerFlag="A";
		return new ResponseEntity<List<Griller>>(grillService.list(grillerFlag), HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@GetMapping("byID/{id}")
	public HttpEntity<Griller> getGriller(@PathVariable int id, HttpSession session) {

		return new ResponseEntity<Griller>((Griller)grillService.get(id), HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@PutMapping("/{id}")
	public HttpEntity<? extends Object> updateGriller(@RequestPart MultipartFile file, WebRequest request,
			@ModelAttribute Griller griller, @PathVariable int id,
			 HttpSession session, BindingResult bindingResult) throws ValidationException {

		//validator.validate(griller, bindingResult);

		if (bindingResult.hasErrors()) {
			throw new ValidationException(bindingResult);
		}

		griller.setGrillId(id);
		griller.setGrillImage(file.getOriginalFilename());
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
	
	
	//daminee
	@CrossOrigin(origins = "*")
	@GetMapping("/byGrillerLocation/{location}")
	public HttpEntity<List<Griller>> getGrillerType(@PathVariable String location , HttpSession session) {
		String grillerFlag="A";

		return new ResponseEntity<List<Griller>>((List<Griller>) grillService.findByLocation(location,grillerFlag), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/byGrillName/{grillName}")
	public HttpEntity<List<Griller>> getByGrillName(@PathVariable String grillName , HttpSession session) {
		String grillerFlag="A";

		return new ResponseEntity<List<Griller>>((List<Griller>) grillService.findByNameLike(grillName,grillerFlag), HttpStatus.OK);
	}
	
	//add purchase
	@CrossOrigin(origins = "*")
	@PostMapping("/purchase")
    public ResponseEntity addPurchase(@RequestBody Purchase purchase){
        boolean flag = grillService.addPurchase(purchase);
       
        if(!flag) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
	
	//list by renter
	@CrossOrigin(origins = "*")
	@GetMapping("/byRenter/{renter}")
	public HttpEntity<List<Griller>> getByRenter(@PathVariable String renter, HttpSession session) {

		return new ResponseEntity<List<Griller>>(grillService.listByRenter(renter), HttpStatus.OK);
	}
	
}