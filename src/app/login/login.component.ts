import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,Form} from '@angular/forms';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Login } from '../login';
import { LoginserveService } from '../loginserve.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title='Login Credentials';
  exform: FormGroup;
  constructor(private router: Router,private Serv:LoginserveService){

  }

  data:any;

  submitted=false;
  EventValue: any = "Save";
  ngOnInit() : void{
    this.getdata();
    this.exform=new FormGroup({
      'email': new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required])
      
    })
  }
  getdata(){
    this.Serv.getData().subscribe((data: any[]) =>{
      this.data = data;
    })
  }
  Save(){
    let d: Login = new Login();
    d.email = this.exform.value.email;
    d.password = this.exform.value.password;
    console.log(this.exform.value.email);
    this.Serv.postData(d);
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

   
    
  