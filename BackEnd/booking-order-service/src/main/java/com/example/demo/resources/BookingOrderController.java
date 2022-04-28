package com.example.demo.resources;


import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.BookingOrder;
import com.example.demo.repository.BookingOrderRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/orders")
public class BookingOrderController {
	
	@Autowired
	private BookingOrderRepository bookrepository;


	Logger logger = LoggerFactory.getLogger(BookingOrderController.class);

	@PostMapping("/addOrder")
	public String saveBook(@RequestBody BookingOrder book) {
	bookrepository.save(book);

		logger.info("[addOrder] info message added");
		logger.warn("[addOrder] warn message added");
		logger.debug("addOrder] debug message added");
		logger.trace("[addOrder] trace message added");

	return "Booked ticket with id :  " + book.getId();
    }


	@GetMapping("/{id}")
	public Optional<BookingOrder> getBook(@PathVariable String id){

		logger.info("info message added");
		logger.warn(" warn message added");
		logger.debug("debug message added");
		logger.trace("trace message added");

		return bookrepository.findById(id);
	}


	@PutMapping("/update/{id}")
	public BookingOrder updateOrder(@PathVariable("id") String id,@RequestBody BookingOrder order ) {
		order.setId(id);
		bookrepository.save(order);

		logger.info("info message added");
		logger.warn(" warn message added");
		logger.debug("debug message added");
		logger.trace("trace message added");

		return order;
	}
		
	 @DeleteMapping("/delete/{id}")
	 public String deleteOrder (@PathVariable String id) {
	  bookrepository.deleteById(id);

		 logger.info("info message added");
		 logger.warn(" warn message added");
		 logger.debug("debug message added");
		 logger.trace("trace message added");

		return "Order deleted with id : "+id;
		}
	}

