import { Component, OnInit } from '@angular/core';
import * as  AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gc-maraly';

  ngOnInit(): void{
    AOS.init();
  }
}
