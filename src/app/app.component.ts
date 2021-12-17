import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
  <div> <h3>WelCome To BusReservation </h3></div>
  <div> <h3>My Dashboard </h3></div>
  <div style="padding:5px">
  <ul class="nav nav-tabs">
  <li> <a routerLink="home" routerLinkActive="active"> Home </a></li><br></ul>
  <li> <a routerLink="Payment" routerLinkActive="active">Payment Details</a></li>
  <li> <a routerLink="login" routerLinkActive="active">login</a></li>
  <li> <a routerLink="signup" routerLinkActive="active">signup</a></li>
  <li> <a routerLink="profile" routerLinkActive="active">Profile</a></li>
  <li> <a routerLink="ticketbookings" routerLinkActive="active">Ticket Booking</a></li>
  <li> <a routerLink="upcomingbuses" routerLinkActive="active">Upcomingbuses</a></li>
  <li> <a routerLink="busavailable" routerLinkActive="active">busavailable</a></li>

  


  

  
  <router-outlet></router-outlet>

  </div>
  
  
  
  
 
  
  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineTicketsBookings';
}
