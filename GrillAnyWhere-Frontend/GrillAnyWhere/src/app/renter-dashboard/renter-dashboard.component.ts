import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router, RouterLink } from "@angular/router";
import * as $ from 'jquery'

@Component({
  selector: 'app-renter-dashboard',
  templateUrl: './renter-dashboard.component.html',
  styleUrls: ['./renter-dashboard.component.css']
})
export class RenterDashboardComponent implements OnInit {

  private userForm:FormGroup
  msg;
  constructor(private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.msg=sessionStorage.getItem('rentername');
  }
  logout(){
    sessionStorage.removeItem('rentername');
    this.router.navigate(['/'])
   // window.location.reload();
   sessionStorage.clear();
  }

}
