import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-griller-info',
  templateUrl: './griller-info.component.html',
  styleUrls: ['./griller-info.component.css']
})
export class GrillerInfoComponent implements OnInit {

  grillInfo;
  grillName
  constructor() { }

  ngOnInit() {
    this.grillInfo=sessionStorage.getItem('grillInfo');
    this.grillName=this.grillInfo;

  }

}
