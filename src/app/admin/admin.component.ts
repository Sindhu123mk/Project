import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
