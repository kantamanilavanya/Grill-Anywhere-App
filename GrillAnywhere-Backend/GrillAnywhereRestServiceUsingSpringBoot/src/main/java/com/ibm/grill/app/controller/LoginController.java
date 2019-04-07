package com.ibm.grill.app.controller;

import java.util.Date;


import javax.servlet.http.HttpSession;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.context.request.WebRequest;

import com.ibm.grill.app.exception.LoginException;
import com.ibm.grill.app.model.ErrorDetails;
import com.ibm.grill.app.model.Login;



@ControllerAdvice
@RestController
public class LoginController {

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public HttpEntity<String> authenticate(@RequestBody Login login, HttpSession session) {

		if (login.getUserName().equalsIgnoreCase("admin") && login.getPassword().equalsIgnoreCase("admin@123")) {
			session.setAttribute("userName", login.getUserName());
			return new ResponseEntity<String>("Success", HttpStatus.OK);
		} else {
			session.removeAttribute("userName");
			throw new LoginException("Invalid User or Password");
//			 return new ResponseEntity<Login>(HttpStatus.FORBIDDEN);
		}

	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public HttpEntity<String> logout(HttpSession session, SessionStatus sessionStatus) {

		session.removeAttribute("userName");
		session.invalidate();

		return new ResponseEntity<String>("Success", HttpStatus.OK);
	}

	@ExceptionHandler(LoginException.class)
	public HttpEntity<ErrorDetails> handleLoginError(LoginException ex, WebRequest request) {

		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getErrorMsg(), request.getDescription(false));

		return new ResponseEntity<ErrorDetails>(errorDetails, HttpStatus.FORBIDDEN);
	}
	
	@ExceptionHandler(Exception.class)
	public HttpEntity<ErrorDetails> handleAllErrors(Exception ex, WebRequest request) {

		ErrorDetails errorDetails = new ErrorDetails(new Date(), "Unexpected error occured. " + ex.getMessage(), request.getDescription(false));

		return new ResponseEntity<ErrorDetails>(errorDetails, HttpStatus.FORBIDDEN);
	}	

}