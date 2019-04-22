import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router, RouterLink } from "@angular/router";
import * as $ from 'jquery'
import { GrillerService } from "../griller.service";


@Component({
  selector: 'app-renter-dashboard',
  templateUrl: './renter-dashboard.component.html',
  styleUrls: ['./renter-dashboard.component.css']
})
export class RenterDashboardComponent implements OnInit {

  private userForm:FormGroup
  msg;
  private grillers:any[];
  grillName;
  location;
  grillerType;
  price;
  grillerDescriptions;
  grillImage
  byType;

  //private userForm:FormGroup
  private user:any

  constructor(private route:ActivatedRoute,private service:GrillerService,private router: Router) { }

  ngOnInit() {
    this.msg=sessionStorage.getItem('rentername');
    
   this.onloadFun();
    
   $(document).ready(function(){
  
    $('#searchbar-icon').click(function(){
      $('#searchbar-input').animate({width: 'toggle'});
      $("#searchbar-icon").toggle();
      $("#searchbar-cross").toggle(500);
    });
    
    $('#searchbar-cross').click(function(){
      $('#searchbar-input').animate({width: 'toggle'});
      $("#searchbar-cross").toggle();
      $("#searchbar-icon").toggle(500);
    });
    
   
  });
    
  }

  onloadFun(){
    this.service.getUser(success=>{
         this.grillers=success;
         console.log("in home "+this.grillers);
    });
  }

  grillerInfo(grillName,price,grillerDescriptions,grillerType,location,grillImage){
    console.log("into grillerInfo"+grillName+","+price+","+grillerDescriptions+","+grillerType+","+location);

    
    this.grillName=grillName;
    this.location=location;
    this.grillerType=grillerType;
    this.grillerDescriptions=grillerDescriptions;
    this.price=price;
    this.grillImage=grillImage
  }

  rentFunc(){
    console.log("into rent func");
    //this.setFlag();
   // window.location.reload();
    // this.router.navigate(['./login']);
    // window.location.reload();
  }

  back(){
    this.router.navigate(['./renter-dashboard']);
  }

  dropDownFilter(event){
    console.log("in dropDown: "+event);
    if(event!='Choose City'){
      this.user={
        location:event
        }
        
        if(1){
          
         this.service.findByLocation(this.user,success=>{
           this.grillers=success;
         });
    }
    }
    else{
      this.service.getUser(success=>{
        this.grillers=success;
        console.log("in home "+this.grillers);
   });
    
    }
    
}
  logout(){
    sessionStorage.removeItem('rentername');
    this.router.navigate(['/'])
   // window.location.reload();
   sessionStorage.clear();
  }

}
