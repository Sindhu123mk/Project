import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value);
  }
 

  navigatehome(){
    this.router.navigateByUrl('/home')
  }
}
