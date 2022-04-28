package com.example.demo.repository;

import com.example.demo.model.BookingOrder;
import com.example.demo.resources.BookingOrderController;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class BookingOrderRepositoryTest {

    @InjectMocks
    BookingOrderController bookingOrderController;

    @Mock
   BookingOrderRepository bookingOrderRepository;

    @Test
    @DisplayName("")
    public void findByIdTest() {


        when(bookingOrderRepository.findById(450)).thenReturn(new BookingOrder("450","Pratik","Nagpur","Upper Berth","28-01-200","Male","Nagpur","Pune","5"));

        BookingOrder bookingOrder = bookingOrderRepository.findById(450);

        assertEquals("450","450", bookingOrder.getId());
        assertEquals("Pratik","Pratik", bookingOrder.getPassengerName());
        assertEquals("Nagpur","Nagpur", bookingOrder.getPassengerAddress());
        assertEquals("Upper Berth","Upper Berth", bookingOrder.getBerthPrefrence());
        assertEquals("28-01-200","28-01-200", bookingOrder.getDoj());
        assertEquals("Male","Male", bookingOrder.getGender());
        assertEquals("Nagpur","Nagpur", bookingOrder.getStartStation());
        assertEquals("Pune","Pune", bookingOrder.getEndStation());
        assertEquals("5","5", bookingOrder.getQuantity());

    }

}