import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: '<h4> The page you are looking for doesnot exists</h4>',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
