import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  form:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
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
