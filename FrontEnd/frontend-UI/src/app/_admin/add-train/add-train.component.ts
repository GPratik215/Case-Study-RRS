import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Train } from 'src/app/train';
import { TrainService } from 'src/app/train.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  train: Train = new Train();

  constructor(private trainService: TrainService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {}

  addTrainForm = new FormGroup({
    trainId: new FormControl(null,[Validators.required]),
    trainName: new FormControl(null,[Validators.required]),
    trainDay: new FormControl(null,[Validators.required]),
    trainSeat: new FormControl(null,[Validators.required]),
    trainSource: new FormControl(null,[Validators.required]),
    trainDestination: new FormControl(null,[Validators.required]),
  })


  saveTrain(){
    this.trainService.addTrain(this.train).subscribe(data => {
      console.log(data);
      this.gotoTrainList();
    },
      error => console.log(error));
      
  }

  gotoTrainList(){
    this.router.navigate(['/admin-train-details']);
  }

  onSubmit() {
    console.log(this.train);
    this.saveTrain();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Train Added Successfully',
      showConfirmButton: false,
      timer: 1500
    })
    // alert("Train Added Successfully");
   
  }

  
}
