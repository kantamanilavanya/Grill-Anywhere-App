package com.ibm.grill.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

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
	
	@Column(name="grill_image")
	private byte[] grillerIcon;
	
	@Column(name="grillerFileName")
	private String grillerFileName;
	
	
	public int getGrillId() {
		return grillId;
	}

	

	public byte[] getGrillerIcon() {
		return grillerIcon;
	}



	public void setGrillerIcon(byte[] grillerIcon) {
		this.grillerIcon = grillerIcon;
	}



	public String getGrillerFileName() {
		return grillerFileName;
	}



	public void setGrillerFileName(String grillerFileName) {
		this.grillerFileName = grillerFileName;
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
	/*
	 * public byte[] getGrillImage() { return grillImage; }
	 * 
	 * public void setGrillImage(byte[] grillImage) { this.grillImage = grillImage;
	 * }
	 */

}
