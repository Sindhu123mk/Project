import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
 import { Payment } from '../payment';
 import { PaymentserveService } from '../paymentserve.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
   form:any;
  exform: FormGroup;
  constructor(private router:Router, private Serv:PaymentserveService) { }
  data:any;

  submitted:false;
  EventValue: any = "Save";

  ngOnInit() :void{
    
   this.getdata();
   this.exform= new FormGroup({
    'name' : new FormControl(null,Validators.required),
    'cvv' : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
    'month': new FormControl(null,Validators.required),
    'ExpYear':new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(4)]),
    'credit' : new FormControl(
      null,
      [
        Validators.required,
        
        Validators.minLength(16),
        Validators.maxLength(16)
        
      ])
    
  })

}
getdata() {
  this.Serv.getData().subscribe((data: any[]) => {
    this.data = data;
  })
}

Save() {
  let d: Payment= new Payment();
  d.Payment_Id = parseInt(this.exform.value.deptno); 
  d.Amount = this.exform.value.Amount;
  d.Mode = this.exform.value.Mode;
  d.name = this.exform.value.name;
  d.credit = this.exform.value.credit;
  d.cvv = this.exform.value.cvv;
  d.month = this.exform.value.month;
  d.ExpYear = this.exform.value.ExpYear;
  console.log(this.exform.value.Payment_Id);
  this.Serv.postData(d);
 }

clicksub() {
  console.log(this.exform.value);
  this.exform.reset();
}
get name() {
  return this.exform.get('name');
}

get credit() {
  return this.exform.get('credit');
}

get cvv() {
  return this.exform.get('cvv');
}
get month() {
  return this.exform.get('month');
}
get ExpYear() {
  return this.exform.get('ExpYear');
}
submit(){
  console.log(this.form.value);
}
navigateticketfare(){
  this.router.navigateByUrl('/ticketfare')
}
}
