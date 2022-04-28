import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  // trains!: Train[];
  // trains!: Train[];
  bookings!: Booking[];

 


  id!: string;
  //  booking!: Booking[];
   booking: Booking = new Booking();
  
  


  constructor(private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router) {
  
     }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.booking = new Booking();
    // this.bookingService.getTicketsById(this.id).subscribe(data =>{
    //   this.booking = data;
    this.searchFrom()
    // })
  }

  // getBookingDetails(id: any){
  //   this.bookingService.getTicketsById(id).subscribe(data => {
  //   console.log(data);
  //   this.booking = data;
  //   },
  //     error => console.log(error));
  // }

  // getBookingDetails(id: any){
  //   this.bookingService.getTicketsById(id).subscribe(data => {
  //   console.log(data);
  //   },
  //     error => console.log(error));
  // }


  searchFrom(){
    this.bookingService.getTicketsById(this.id).subscribe(data => {
      console.log(data);
      // this.booking = data;
      // alert(data)

       },
        error => console.log(error));
}

}
  

// public searchFrom(){
//     let response = this.bookingService.getTicketsById(this.id);
//     response.subscribe((data:any) => this.bookings=data);
//     this.getBookingDetails(this.id)
//     console.log(this.booking);

    // this.getBookingDetails(this.id);
    //  this.getBookingList();
 
  //  public searchFrom() {
  //   console.log('printeddddddd')
  //   let response= this.service.getTrainsbyfrom(this.trainFrom);
  //   response.subscribe((data:any) => this.trains=data);
  //   console.log(this.trains)
  // }



