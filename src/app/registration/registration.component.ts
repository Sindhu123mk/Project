import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { Registration } from '../registration';
import { RegistrationserveService } from '../registrationserve.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title:'Registration';
  constructor(private Serv: RegistrationserveService) { }
  data: any;
  RegistrationForm:FormGroup;
  submitted = false;
  EventValue : any = "Save";
  exform: FormGroup;

  ngOnInit(): void {
    this.getdata();
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
     
    })
    }
    getdata(){
      this.Serv.getData().subscribe((data: any[]) => {
       this.data = data;
      })
    }
    Save(){
      let d: Registration = new Registration();
      d.firstname = this.RegistrationForm.value.firstname;
      d.lastname = this.RegistrationForm.value.lastname;
      d.phone = this.RegistrationForm.value.phone;
      d.email = this.RegistrationForm.value.email;
      console.log(this.RegistrationForm.value.deptno);
      this.Serv.postData(d);
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
