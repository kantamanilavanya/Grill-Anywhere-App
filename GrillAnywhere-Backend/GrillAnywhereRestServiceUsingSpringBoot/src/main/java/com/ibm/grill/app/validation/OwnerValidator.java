package com.ibm.grill.app.validation;

import org.springframework.stereotype.Component;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.ibm.grill.app.model.OwnerRegister;

@Component(value = "ownerValidator")
public class OwnerValidator implements Validator {

	public boolean supports(Class<?> arg0) {
		return OwnerRegister.class.isAssignableFrom(arg0);
	}

	public void validate(Object target, Errors errors) {
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "name.required", "Field name is required.");

	}

}
