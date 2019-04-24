package com.ibm.grill.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class OwnerRegister {

	 @Id
	    @GeneratedValue(strategy= GenerationType.AUTO)
		private int id;
		private String name;
		private String email;
		private String address;
		private int ph_no;
		private String password;
		
		public OwnerRegister() {}
		public OwnerRegister(int id, String name, String email, String address, int ph_no, String password) {
			super();
			this.id = id;
			this.name = name;
			this.email = email;
			this.address = address;
			this.ph_no = ph_no;
			this.password = password;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public int getPh_no() {
			return ph_no;
		}
		public void setPh_no(int ph_no) {
			this.ph_no = ph_no;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		
}
