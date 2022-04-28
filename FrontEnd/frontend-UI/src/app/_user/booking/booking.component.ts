import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking: Booking = new Booking();
  id: any;

  // form validators
  //  bookingForm!: FormGroup;

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {}

    bookingForm = new FormGroup({
    passengerName: new FormControl(null,[Validators.required]),
    passengerAddress: new FormControl(null,[Validators.required, Validators.minLength(10)] ),
    berthPrefrence: new FormControl(null,[Validators.required]),
    doj: new FormControl(null,[Validators.required]),
    gender: new FormControl(null,[Validators.required]),
    source: new FormControl(null,[Validators.required]),
    destination: new FormControl(null,[Validators.required]),
    quantity: new FormControl(null,[Validators.required]),
  })

  saveTickets(){
    this.bookingService.bookTickets(this.booking).subscribe(data => {
    console.log(data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Congratulations!! You have booked your Tickets Please Proceed for the Payment',
      showConfirmButton: false,
      timer: 3000
    })
    // alert( "Congratulations!! You have booked your Tickets");
    // this.gotoHome();
    // this.gotoPayment();
    this.gotoStripePayment();
    },
      error => console.log(error));
  }

  gotoHome(){
    this.router.navigate(['/home']);
  }

  gotoPayment(){
    this.router.navigate(['/payment']);
  }

  gotoStripePayment(){
    this.router.navigate(['/stripe-payment']);
  }


  onSubmit(){
    console.log(this.booking);
    this.saveTickets()
  }

}
