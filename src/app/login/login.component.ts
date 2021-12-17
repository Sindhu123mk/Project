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
  constructor(private router: Router){

  }
  ngOnInit(){
    this.exform=new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required])
      
    })
  }
  clicksub(next){
    if(next==='Cancel'){
      this.router.navigateByUrl('/home')
    }
    if(next==='login'){
      this.router.navigateByUrl('/dashboard/booking')
    }
    if(next === 'signup'){
      this.router.navigateByUrl('/signup')
    }
  }
  get email(){
    return this.exform.get('email');
  }
  get password(){
    return this.exform.get('password')
  }
}

   
    
  