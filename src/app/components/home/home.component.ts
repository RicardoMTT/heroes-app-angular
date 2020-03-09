import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  title:string = "Comic App";
  description:string = "Page of heroes Comic";
  constructor() { }

  ngOnInit() {
  }

}
