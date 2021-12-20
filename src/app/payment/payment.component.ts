import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
   form:any;
  exform: FormGroup;
  constructor(private router:Router) { }
  ngOnInit(){
  
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
