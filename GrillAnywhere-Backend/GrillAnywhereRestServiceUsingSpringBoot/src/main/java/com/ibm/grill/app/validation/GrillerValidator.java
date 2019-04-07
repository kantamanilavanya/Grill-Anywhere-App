package com.ibm.grill.app.validation;

import org.springframework.stereotype.Component;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.ibm.grill.app.model.Griller;

@Component(value = "grillerValidator")
public class GrillerValidator implements Validator {

	public boolean supports(Class<?> arg0) {
		return Griller.class.isAssignableFrom(arg0);
	}

	public void validate(Object target, Errors errors) {
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "grillName", "grillName.required", "Field name is required.");

	}

}
