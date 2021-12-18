import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { TicketbookingsComponent } from './ticketbookings/ticketbookings.component';
import { UpcommingbusesComponent } from './upcommingbuses/upcommingbuses.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentComponent } from './payment/payment.component';
import { MyDashBoardComponent } from './my-dash-board/my-dash-board.component';
import { BusComponent } from './bus/bus.component';
import { TicketfareComponent } from './ticketfare/ticketfare.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'bus',component:BusComponent},
  {path:'ticketbookings',component:TicketbookingsComponent},
  {path:'upcommingbuses',component:UpcommingbusesComponent},
  {path:'dashboard',component:MyDashBoardComponent ,children:[
    {path: '', component: ProfileComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'booking', component: TicketbookingsComponent},
    {path: 'changepass', component: ChangePasswordComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'signup',component:SignupComponent},
  {path:'Payment',component:PaymentComponent},
  {path:'ticketfare',component:TicketfareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
