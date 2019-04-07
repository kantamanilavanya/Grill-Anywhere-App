package com.ibm.grill.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ResponseStatus;

//@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Validation Error")
public class ValidationException extends Exception {
	private BindingResult valError;

	public ValidationException(BindingResult valError) {
		this.setValError(valError);
	}

	public BindingResult getValError() {
		return valError;
	}

	public void setValError(BindingResult valError) {
		this.valError = valError;
	}

}
