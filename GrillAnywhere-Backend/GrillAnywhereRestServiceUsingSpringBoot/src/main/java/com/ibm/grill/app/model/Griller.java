package com.ibm.grill.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table
public class Griller {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int grillId;
	private String grillName;
	private String grillerType;
	private String grillerDescriptions;
	private Double price;
	private String location;
	private String grillerFlag="A";
	private String owner;
	private String renter;

	
	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getRenter() {
		return renter;
	}

	public void setRenter(String renter) {
		this.renter = renter;
	}

	private String grillImage;
	 
	public int getGrillId() {
		return grillId;
	}

	public void setGrillId(int grillId) {
		this.grillId = grillId;
	}

	public String getGrillName() {
		return grillName;
	}

	public void setGrillName(String grillName) {
		this.grillName = grillName;
	}

	public String getGrillerType() {
		return grillerType;
	}

	public void setGrillerType(String grillerType) {
		this.grillerType = grillerType;
	}

	public String getGrillerDescriptions() {
		return grillerDescriptions;
	}

	public void setGrillerDescriptions(String grillerDescriptions) {
		this.grillerDescriptions = grillerDescriptions;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	
	  public String getGrillImage() { return grillImage; }
	  
	  public void setGrillImage(String grillImage) { this.grillImage = grillImage;
	  }

	public String getGrillerFlag() {
		return grillerFlag;
	}

	public void setGrillerFlag(String grillerFlag) {
		this.grillerFlag = grillerFlag;
	}
	 
}