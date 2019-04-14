import { Component, OnInit } from '@angular/core';
import { GrillerService } from "../griller.service";

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.css']
})
export class AutomaticComponent implements OnInit {
  private grillers:any[]
  constructor(private service:GrillerService) { }

  ngOnInit() {
    this.onloadFun()
  }
  onloadFun(){
    this.service.getGrillerAutomatic(success=>{
      this.grillers=success;
    });
  }

}
