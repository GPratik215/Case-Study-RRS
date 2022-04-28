import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  handler:any = null;
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.loadStripe();

  }

  pay(amount: number) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KsN5tSC5Ku8XatbMNXcFsGnERBfsuxITYulzzmKKGnzA7B9eqw7SlEWstkH3ov3QiF9HfJ2H43DiBz1Za6vMQkq00x4Uhsjsm',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Congratulations!! You have booked your Tickets',
          showConfirmButton: false,
          timer: 3000
        })
        window.location.href = "/thankyou";
        //  this.gotoThanksPage();
        // this.gotoThanksPage();
        //  alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Pakistan Railway Reservation System',
      description: 'Proceed for the Payment',
      amount: amount * 100,
      currency : 'INR'
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KsN5tSC5Ku8XatbMNXcFsGnERBfsuxITYulzzmKKGnzA7B9eqw7SlEWstkH3ov3QiF9HfJ2H43DiBz1Za6vMQkq00x4Uhsjsm',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

  // gotoThanksPage(){
  //   this.router.navigate(['/thankyou']);
  // }

}
