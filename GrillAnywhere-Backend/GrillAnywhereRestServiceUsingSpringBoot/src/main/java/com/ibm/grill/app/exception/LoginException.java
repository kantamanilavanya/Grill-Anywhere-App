package com.ibm.grill.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// Uncomment to enable error handling with @ResponseStatus annotation - error be returned as html response
//@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Invalid username or password")
public class LoginException extends RuntimeException {
	private String errorMsg;

	public LoginException(String errorMsg) {
		super(errorMsg);
		this.errorMsg = errorMsg;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

}
