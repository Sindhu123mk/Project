import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  exform: FormGroup;

  ngOnInit() {
    this.exform = new FormGroup({
      'firstname' : new FormControl(null, Validators.required),
      'lastname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password':new FormControl(null,[Validators.required]),
      'cp':new FormControl(null,[Validators.required]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
     
    });
    }
  
    clicksub() {
      console.log(this.exform.value);
      this.exform.reset();
    }
    get firstname() {
      return this.exform.get('firstname');
    }
    get lastname(){
      return this.exform.get('lastname');
    }
    get email() {
      return this.exform.get('email');
    }

    get password() {
      return this.exform.get('password');
    }
    
    get cp() {
      return this.exform.get('cp');
    }
    
    get phone() {
      return this.exform.get('phone');
    }
    
  
  
  }


