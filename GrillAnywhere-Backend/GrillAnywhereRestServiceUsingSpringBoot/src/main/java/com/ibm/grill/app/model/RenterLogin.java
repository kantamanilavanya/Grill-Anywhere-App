package com.ibm.grill.app.model;


import javax.persistence.Entity;
import javax.persistence.Table;

public class RenterLogin {
	
	private String userName;
	private String password;
	
	public RenterLogin()
	{
		
	}
	
	public RenterLogin(String userName, String password)
	{
		this.userName = userName;
		this.password = password;
	}	
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}	

}
