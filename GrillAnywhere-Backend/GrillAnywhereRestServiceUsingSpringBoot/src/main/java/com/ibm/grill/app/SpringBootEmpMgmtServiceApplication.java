package com.ibm.grill.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*")
public class SpringBootEmpMgmtServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootEmpMgmtServiceApplication.class, args);
	}

}
