import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketbookings',
  templateUrl: './ticketbookings.component.html',
  styleUrls: ['./ticketbookings.component.css']
})
export class TicketbookingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickBook(){
    this.router.navigateByUrl('/payment')
  }
}
