import { Component, OnInit } from '@angular/core';
import { GenerateOptions } from 'rxjs/internal/observable/generate';
declare var google;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
texto:string='Gujrat Pakistan';
lat:number= 32.571144;
lng:number=74.075005;
zoom:number =15
  constructor() { }

  ngOnInit() {
  }

}
