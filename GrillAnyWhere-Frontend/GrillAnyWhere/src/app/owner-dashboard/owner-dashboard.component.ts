import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router, RouterLink } from "@angular/router";
import * as $ from 'jquery'

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  private userForm:FormGroup
  msg;
  constructor(private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.msg=sessionStorage.getItem('ownername');
  }
  logout(){
    sessionStorage.removeItem('ownername');
    this.router.navigate(['/'])
    window.location.reload();
  }

}
