import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form ,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-my-dash-board',
  templateUrl: './my-dash-board.component.html',
  styleUrls: ['./my-dash-board.component.css']
})
export class MyDashBoardComponent implements OnInit {
  form: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value);
  }
  onSubmit() {​​​​​​​
    this.router.navigate(['/profile'])
    }​​​​​​​​​​​​​​
    
  onSubmit1() {​​​​​​​
      this.router.navigate(['/bus'])
      
      }​​​​​​​​​​​​​​
      
    
}
