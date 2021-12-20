import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';
import { UpcommingbusesComponent } from './upcommingbuses/upcommingbuses.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentComponent } from './payment/payment.component';
import { MyDashBoardComponent } from './my-dash-board/my-dash-board.component';
import { BusComponent } from './bus/bus.component';
import { TicketfareComponent } from './ticketfare/ticketfare.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'bus',component:BusComponent},
   {path:'booking',component:BookingComponent},
  {path:'upcommingbuses',component:UpcommingbusesComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:MyDashBoardComponent ,children:[
    {path: '', component: ProfileComponent},
    {path: 'profile', component: ProfileComponent},
    {path:'booking',component:BookingComponent},
    {path: 'changepassword', component: ChangePasswordComponent}
  ]},

  {path:'registration',component:RegistrationComponent},
  {path:'signup',component:SignupComponent},
  {path:'payment',component:PaymentComponent},
  {path:'ticketfare',component:TicketfareComponent},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
