package com.net.backend.springboot.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotfoundException extends RuntimeException {


	private static final long serialVersionUID = 1L;
	
	public ResourceNotfoundException(String message) {
		super(message);
		
	}

}
//int a = 50;
//int b = 40;
//
//int temp;
//
//temp = a;
//a = b;
//b = temp;
//
//a = a+b;