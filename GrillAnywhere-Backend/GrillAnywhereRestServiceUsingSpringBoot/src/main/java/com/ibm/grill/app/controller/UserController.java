package com.ibm.grill.app.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.grill.app.model.Griller;
import com.ibm.grill.app.model.User;
import com.ibm.grill.app.payload.UserIdentityAvailability;
import com.ibm.grill.app.payload.UserSummary;
import com.ibm.grill.app.security.CurrentUser;
import com.ibm.grill.app.security.UserPrincipal;
import com.ibm.grill.app.service.UserServiceImpl;

//@RestController
//@RequestMapping("/api")

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class UserController {
	
	@Autowired
     UserServiceImpl userService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@GetMapping("/status")
	public String status() {
		return "Services accessible after login";
	}

   @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<UserSummary> getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getFirstname(), currentUser.getLastname(), currentUser.getEmail(), currentUser.getGender(),currentUser.getType());
        return new ResponseEntity<>(userSummary, HttpStatus.OK);
    }
    
    @GetMapping("/user/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userService.existsByUsername(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userService.existsByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }
    
    @CrossOrigin(origins = "*")
	@GetMapping("/{id}/profile")
	public User findEndUser(@PathVariable int id) {
		
		return userService.get(id);
		 //return new ResponseEntity<String>("Success", HttpStatus.OK);
		
	}
	
	
	@CrossOrigin(origins = "*")
	@PostMapping
	public ResponseEntity<String> createEndUser(@RequestBody User V)
	{
		userService.add(V);
		return new ResponseEntity<String>("Success", HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@GetMapping
	public List<User> getAll()
	{
		return userService.list();
	}	
	
	
	@CrossOrigin(origins = "*")
	@GetMapping("/userprofileid")
	public Long getUserId(@RequestBody User V) {
		return V.getId();
		
	}

    
    
}
