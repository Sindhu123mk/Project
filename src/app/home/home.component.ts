import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: any;

  constructor(private router:Router,private builder:FormBuilder) { 
this.form=this.builder.group({
  from:[null,Validators.required],
  to:[null,Validators.required],
  doj:[null,Validators.required],
  dor:[null,Validators.required]
})

  }

  ngOnInit(): void {
  }
  submit(home){
    console.log(home);
  }
 

  navigateBus(){
    this.router.navigateByUrl('/bus')
  }

}
