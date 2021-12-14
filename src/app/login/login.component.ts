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
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
ngOnit(): void {
}

form=new FormGroup(
  {

    userid:new FormControl('', [Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),

  }
);

get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);
}
}