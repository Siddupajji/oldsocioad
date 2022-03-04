import { fade, fade1, fade2, imageright } from './../animations';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  animations: [
    fade,
    fade1,
    fade2,
    imageright
  ]
})


export class ApplicationComponent implements OnInit {
  isdisabled = false

  @HostListener('document:scroll')
  function(){
      this.isdisabled = true
  }

  constructor() { }



  ngOnInit(): void {


  }

}
