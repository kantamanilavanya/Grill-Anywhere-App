package com.ibm.grill.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class GrillAnyWhereException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public GrillAnyWhereException(String message) {
        super(message);
    }

    public GrillAnyWhereException(String message, Throwable cause) {
        super(message, cause);
    }
}
