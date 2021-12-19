import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ticketfare',
  templateUrl: './ticketfare.component.html',
  styleUrls: ['./ticketfare.component.css']
})
export class TicketfareComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clicksub(next){
    if(next==='home'){
    this.router.navigateByUrl('/home')
    }
  
  }
}
