import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/register';
import { RegisterService } from 'src/app/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  register : Register = new Register();

  constructor(
    private registerService: RegisterService, 
    private router:Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {}

  registrationForm = new FormGroup({
    userName: new FormControl(null,[Validators.required]),
    userFirstName: new FormControl(null,[Validators.required]),
    userLastName: new FormControl(null,[Validators.required]),
    userPassword: new FormControl(null,[Validators.required]),
  })

  saveUser(){
    this.registerService.userRegistration(this.register).subscribe( data => {
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User Registered Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this. goToHome();
    },
    error => console.log(error));
  }

  goToHome(){
      this.router.navigate(['/home']);
  }

  onSubmit(){
    console.log(this.register);
    this.saveUser();
  }

}
