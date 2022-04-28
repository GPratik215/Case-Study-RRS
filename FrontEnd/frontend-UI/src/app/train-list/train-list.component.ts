import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TrainService } from '../train.service';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {

  trains!: Train[];
  search : String ="";
  searchword: String | undefined;
  constructor(private trainService:TrainService) { }

  ngOnInit(): void {
    this.getAvailableTrains();
  }

  private getAvailableTrains(){
    this.trainService.getTrainSearchList().subscribe(data => {
      this.trains = data;
    });
  }




}
