import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  form:any;
  constructor(private router:Router,private Serv: UserService) { }
  data: any;
  UserForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";
  ngOnInit() : void{
    this.getdata();
    this.UserForm = new FormGroup({
      User_Id: new FormControl(null),
      UserName: new FormControl("", [Validators.required]),
      PhoneNumber: new FormControl("", [Validators.required]),
      Email_Id: new FormControl("", [Validators.required]),
      Password: new FormControl("", [Validators.required]),

    })
  }
  getdata() {
    this.Serv.getData().subscribe((data: any[]) => {
      this.data = data;
    })
  }
  Save() {
    let d: User = new User();
    d.User_Id = this.UserForm.value.User_Id; 
    d.UserName = this.UserForm.value.UserName;
    d.PhoneNumber = this.UserForm.value.PhoneNumber;
    d.Email_Id = this.UserForm.value.Email_Id; 
    d.Password = this.UserForm.value.Password;
    d.Gender = this.UserForm.value.Gender;

    console.log(this.UserForm.value.User_Id);
    this.Serv.postData(d);
   }
 submit(){
    console.log(this.form.value);
  }
 navigatehome(){
    this.router.navigateByUrl('/home')
  }
}
