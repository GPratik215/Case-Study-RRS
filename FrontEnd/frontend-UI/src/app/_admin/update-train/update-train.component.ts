import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from 'src/app/train';
import { TrainService } from 'src/app/train.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-train',
  templateUrl: './update-train.component.html',
  styleUrls: ['./update-train.component.css']
})
export class UpdateTrainComponent implements OnInit {

  trainId!: number;
  train: Train = new Train();
  constructor(private trainService: TrainService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.trainId = this.route.snapshot.params['trainId'];
    this.trainService.getTrainById(this.trainId).subscribe(data => {
      this.train = data;
     }, error => console.log(error));
  }
  

  onSubmit() {
    this.trainService.updateTrain(this.trainId, this.train).subscribe(data =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Train Updated Successfully',
        showConfirmButton: false,
        timer: 2000
      })
      this.gotoTrainList();
    }, 
    error => console.log(error))
    
  }

  gotoTrainList(){
    this.router.navigate(['admin-train-details']);
  }

}