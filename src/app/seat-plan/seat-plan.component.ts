import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-plan',
  templateUrl: './seat-plan.component.html',
  styleUrls: ['./seat-plan.component.css']
})
export class SeatPlanComponent implements OnInit {
  totalSeats: any=[];
  constructor() { }

  ngOnInit(): void {
    this.totalSeats.length=40;
  }

}
