import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  form:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value);
  }
 

  navigatebooking(){
    this.router.navigateByUrl('/booking')
  }

}
