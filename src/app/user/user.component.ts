import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  form:any;
  constructor(private router:Router) { }

  ngOnInit() {
   
  }
 submit(){
    console.log(this.form.value);
  }
 navigatehome(){
    this.router.navigateByUrl('/home')
  }
}
