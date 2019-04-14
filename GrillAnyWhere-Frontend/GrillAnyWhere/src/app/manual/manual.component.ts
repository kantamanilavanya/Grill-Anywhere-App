import { Component, OnInit } from '@angular/core';
import { GrillerService } from "../griller.service";

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
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
