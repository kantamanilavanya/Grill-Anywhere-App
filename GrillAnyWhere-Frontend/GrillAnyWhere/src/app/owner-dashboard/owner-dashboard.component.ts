import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router, RouterLink } from "@angular/router";
import * as $ from 'jquery'
import {GrillerService} from '../griller.service'

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  private userForm:FormGroup
  msg;
  grillers:any[]
  constructor(private route:ActivatedRoute,private router : Router,private service:GrillerService) { }

  ngOnInit() {
    this.msg=sessionStorage.getItem('ownername');
    this.service.getUser(success=>{
      this.grillers=success;
    })
  }
  logout(){
    sessionStorage.removeItem('ownername');
    this.router.navigate(['/'])
    window.location.reload();
  }

}
