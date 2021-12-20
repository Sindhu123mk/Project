import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BookingserveService } from './bookingserve.service';
import { HttpClientModule } from '@angular/common/http';
import { SeatPlanComponent } from './seat-plan/seat-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    BusComponent,
     BookingComponent,
    UpcommingbusesComponent,
  
    
    LoginComponent,
    RegistrationComponent,
    SignupComponent,
    PaymentComponent,
    MyDashBoardComponent,
    TicketfareComponent,
    ChangePasswordComponent,
    SeatPlanComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
