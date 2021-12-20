import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Bus } from '../bus';
import { BusserveService } from '../busserve.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  form:any;
  constructor(private router:Router,private Serv: BusserveService) { }
  data: any;
  BusForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";
  ngOnInit(): void {
    this.getdata();
    this.BusForm = new FormGroup({
      Bus_Id: new FormControl(null),
      BusName: new FormControl("", [Validators.required]),
     
    })
}
getdata() {
  this.Serv.getData().subscribe((data: any[]) => {
    this.data = data;
  })
}
Save() {
  let d: Bus = new Bus();
  d.Bus_Id = parseInt(this.BusForm.value.Bus_Id); 
  d.Bus_Name = this.BusForm.value.Bus_Name;
  d.Source = this.BusForm.value.Source;
  d.Destination = this.BusForm.value.Destination; 
  d.Arrival_time = this.BusForm.value.Arrival_time;
  d.Departure_time = this.BusForm.value.Departure_time;
  console.log(this.BusForm.value.Bus_Id);
  this.Serv.postData(d);
 }
  submit(){
    console.log(this.form.value);
  }
 

  navigatebooking(){
    this.router.navigateByUrl('/booking')
  }

}
