import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-dailog',
  templateUrl: './admin-dailog.component.html',
  styleUrls: ['./admin-dailog.component.css']
})
export class AdminDailogComponent implements OnInit {

  constructor(public dialog:MatDialog) { }


    
  ngOnInit(): void {
  }

}
