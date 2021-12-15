import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div> <h3>WelCome To BusReservation </h3></div>
  <div> <h3>My Dashboard </h3></div>
  <div style="padding:5px">
  <ul class="nav nav-tabs">
   <li> <a routerLink="login" routerLinkActive="active"> Login </a></li>
   <li> <a routerLink="registration" routerLinkActive="active"> Registration</a></li>
   <li> <a routerLink="home" routerLinkActive="active"> Home</a></li>
   <li> <a routerLink="profile" routerLinkActive="active">Profile</a></li>
   <li> <a routerLink="busavailable" routerLinkActive="active">BusesAvailable</a></li>
   <li> <a routerLink="ticketbookings" routerLinkActive="active">Tickets Bookings</a></li>
   <li> <a routerLink="upcommingbuses" routerLinkActive="active">Upcomming Buses</a></li>
   <li> <a routerLink="logout" routerLinkActive="active">Logout</a></li>
  

  </ul>
  <router-outlet></router-outlet>

  </div>
  
  
  
  
  
  
  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineTicketsBookings';
}
