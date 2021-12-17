import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,Form} from '@angular/forms';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exform: FormGroup;
  ngOnInit(){
    this.exform=new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required])
      
    })
  }
  clicksub(){
    console.log(this.exform.value);
    this.exform.reset();
  }
  get email(){
    return this.exform.get('email');
  }
  get password(){
    return this.exform.get('password')
  }
}

   
    
  