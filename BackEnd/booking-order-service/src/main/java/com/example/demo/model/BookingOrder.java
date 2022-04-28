package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.*;

import java.util.Date;

@Data
@Document(collection = "Orders")
public class BookingOrder {
	
	@Id
	private String id;
	private String passengerName;
	private String passengerAddress;
	private String berthPrefrence;
	private String doj;
	private String gender;
	private String source;
	private String destination;
	private String quantity;


	
	public BookingOrder() {
		
	}

	public BookingOrder(String id, String passengerName, String passengerAddress, String berthPrefrence, String doj, String gender, String startStation, String endStation, String quantity) {

		this.id = id;
		this.passengerName = passengerName;
		this.passengerAddress = passengerAddress;
		this.berthPrefrence = berthPrefrence;
		this.doj = doj;
		this.gender = gender;
		this.source = startStation;
		this.destination = endStation;
		this.quantity = quantity;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public String getPassengerAddress() {
		return passengerAddress;
	}

	public void setPassengerAddress(String passengerAddress) {
		this.passengerAddress = passengerAddress;
	}

	public String getBerthPrefrence() {
		return berthPrefrence;
	}

	public void setBerthPrefrence(String berthPrefrence) {
		this.berthPrefrence = berthPrefrence;
	}

	public String getDoj() {
		return doj;
	}

	public void setDoj(String doj) {
		this.doj = doj;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getStartStation() {
		return source;
	}

	public void setStartStation(String startStation) {
		this.source = startStation;
	}

	public String getEndStation() {
		return destination;
	}

	public void setEndStation(String endStation) {
		this.destination = endStation;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "BookingOrder [id=" + id + ", passengerName=" + passengerName + ", passengerAddress=" + passengerAddress +
				", berthPrefrence=" + berthPrefrence +
				", doj=" + doj +
				", gender=" + gender +
				", source=" + source +
				", destination=" + destination +
				", quantity=" + quantity + "]";
	}

//	"BookingOrder [id=" + id + ", quantity=" + quantity + ", startStation=" + source + ", endStation="
//				+ destination + "]";

	//	public BookingOrder(String id, String quantity, String startStation, String endStation) {
//		this.id = id;
//		this.quantity = quantity;
//		this.source = startStation;
//		this.destination = endStation;
//	}
//
//	public String getId() {
//		return id;
//	}
//
//	public void setId(String id) {
//		this.id = id;
//	}
//
//	public String getQuantity() {
//		return quantity;
//	}
//
//	public void setQuantity(String quantity) {
//		this.quantity = quantity;
//	}
//
//	public String getStartStation() {
//		return source;
//	}
//
//	public void setStartStation(String startStation) {
//		this.source = startStation;
//	}
//
//	public String getEndStation() {
//		return destination;
//	}
//
//	public void setEndStation(String endStation) {
//		this.destination = endStation;
//	}
//
//	@Override
//	public String toString() {
//		return "BookingOrder [id=" + id + ", quantity=" + quantity + ", startStation=" + source + ", endStation="
//				+ destination + "]";
//	}



}
