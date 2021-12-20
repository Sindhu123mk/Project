import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Booking } from '../booking';
import { BookingserveService } from '../bookingserve.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  title:"Bookings";
  form:any;
  constructor(private router: Router, private Serv:BookingserveService) { }
  data: any;
  BookingForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";
  ngOnInit(): void {
    this.getdata();
    this.BookingForm = new FormGroup({
      

    })
  }
  getdata(){
    this.Serv.getData().subscribe((data: any[]) => {
      this.data = data;
    })
  }
  Save() {
    let d: Booking = new Booking();
    d.Booking_Id = parseInt(this.BookingForm.value.Booking_Id); 
    d.Booking_Date = this.BookingForm.value.Booking_Date;
    d.Schedule_Id = this.BookingForm.value.Schedule_Id;
    d.Amount = this.BookingForm.value.Amount; 
    d.Email_Id = this.BookingForm.value.Email_Id;
    d.PhoneNumber = this.BookingForm.value.PhoneNumber;
    console.log(this.BookingForm.value.Booking_Id);
    this.Serv.postData(d);
   }
  
   clicksub(next){
     if(next==='payment'){
     this.router.navigateByUrl('/payment')
     }
   
   }
//   submit(){
//     console.log(this.form.value);
//   }
//  navigatepayment(){
//     this.router.navigateByUrl('/payment')
//   }
}
