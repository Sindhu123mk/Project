import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  exform: FormGroup;

  ngOnInit() {
    this.exform = new FormGroup({
      'firstname' : new FormControl(null, Validators.required),
      'lastname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
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
    get phone() {
      return this.exform.get('phone');
    }
    
}
