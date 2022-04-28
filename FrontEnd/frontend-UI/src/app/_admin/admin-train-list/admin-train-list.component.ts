import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from 'src/app/train';
import { TrainService } from 'src/app/train.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-train-list',
  templateUrl: './admin-train-list.component.html',
  styleUrls: ['./admin-train-list.component.css']
})
export class AdminTrainListComponent implements OnInit {

  trains!: Train[];

  constructor(private trainService: TrainService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTrains();
  }

  private getTrains(){
    this.trainService.getTrainList().subscribe(data => {
      this.trains = data;
    });
  }

  trainDetails(trainId:number){
    this.router.navigate(['tain-details',trainId]);
  }

  updateTrain(trainId:number){
    this.router.navigate(['update-train', trainId]);
  }

  deleteTrain(trainId:number){
    this.trainService.deleteTrain(trainId).subscribe(data => {
      console.log()
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Train Deleted Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      // alert("Train Deleted Successfully")
      this.getTrains();
    })
  }

}

