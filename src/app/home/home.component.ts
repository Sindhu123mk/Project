import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value);
  }
  onSubmit() {​​​​​​​
    this.router.navigate(['/login'])
    }​​​​​​​​​​​​​​
    onSubmit1() {​​​​​​​
      this.router.navigate(['/signup'])
      
      }​​​​​​​​​​​​​​
      onSubmit2() {​​​​​​​
        this.router.navigate(['/registration'])
        
        }​​​​​​​​​​​​​​
        onSubmit3() {​​​​​​​
          this.router.navigate(['/upcomingbuses'])
          
          }​​​​​​​​​​​​​​
          onSubmit4() {​​​​​​​
            this.router.navigate(['/bus'])
            
            }​​​​​​​​​​​​​​

}
