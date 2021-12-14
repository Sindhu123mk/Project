import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BusavailableComponent } from './busavailable/busavailable.component';
import { TicketbookingsComponent } from './ticketbookings/ticketbookings.component';
import { UpcommingbusesComponent } from './upcommingbuses/upcommingbuses.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'busavailable',component:BusavailableComponent},
  {path:'ticketbookings',component:TicketbookingsComponent},
  {path:'upcommingbuses',component:UpcommingbusesComponent},
  {path:'logout',component:LogoutComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
