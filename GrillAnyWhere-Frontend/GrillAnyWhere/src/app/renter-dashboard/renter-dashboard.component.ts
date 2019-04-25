import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router, RouterLink } from "@angular/router";
import * as $ from 'jquery'
import { GrillerService } from "../griller.service";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-renter-dashboard',
  templateUrl: './renter-dashboard.component.html',
  styleUrls: ['./renter-dashboard.component.css']
})
export class RenterDashboardComponent implements OnInit {

  private userForm:FormGroup
  msg;
  private grillers:any[];

  private grillers1:any[];
  grillName;
  location;
  grillerType;
  price;
  grillerDescriptions;
  grillImage
  byType;
  grillId

  
  showAllProduct: boolean;
  //private userForm:FormGroup
  private user:any
  private purchase:any
  renter

  constructor(private route:ActivatedRoute,private service:GrillerService,private router: Router,private httpClient:HttpClient) { }

  ngOnInit() {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };

    this.msg=sessionStorage.getItem('renter');
    
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

  grillerInfo(grillId,grillName,price,grillerDescriptions,grillerType,location,grillImage){
    console.log("into grillerInfo"+grillName+","+price+","+grillerDescriptions+","+grillerType+","+location);

    
    this.grillName=grillName;
    this.location=location;
    this.grillerType=grillerType;
    this.grillerDescriptions=grillerDescriptions;
    this.price=price;
    this.grillImage=grillImage
    this.grillId=grillId

    
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


searchBarFilter(event){
  //var text = document.getElementsByName("searchbar-input").value;
  console.log("in searchBar: "+event);
  this.byType=event;
  this.user={
    grillName:this.byType
    }
    
    if(1){
      
    //  this.service.findByGrillerType(this.user,success=>{
    //    this.grillers=success;
    //  });
    this.service.findByGrillName(this.user,success=>{
      this.grillers=success;
    });
    }
  }

  byType1(event){
    this.byType=event;
  this.user={
    grillerType:this.byType
    }
    
    if(1){
      
     this.service.findByGrillerType(this.user,success=>{
       this.grillers=success;
     });
    
    }
  }

  logout(){
    sessionStorage.removeItem('rentername');
    this.router.navigate(['/'])
   // window.location.reload();
   sessionStorage.clear();
  }

  toggleAllGriller(){
    document.location.reload();
  }

  toggleAllProduct(){
    

    this.renter=sessionStorage.getItem('renter');
    this.user={
      grillerType:this.renter
      }
      
      if(1){
        
       this.service.findGrillerByRenter(this.user,success1=>{
         this.grillers1=success1;
         console.log(this.grillers1);
       });
      }
  }

  rentGriller(grillId,grillName,price,grillerDescriptions,grillerType,location,grillImage){
    console.log("in rentGrill");
    this.grillName=grillName;
    this.location=location;
    this.grillerType=grillerType;
    this.grillerDescriptions=grillerDescriptions;
    this.price=price;
    this.grillImage=grillImage;
    this.grillId=grillId;

    this.renter=sessionStorage.getItem('renter');
    sessionStorage.setItem('grillId',this.grillId);
    sessionStorage.setItem('grillerPrice',this.price);
    console.log("in rentGriller id "+this.grillId);

    this.router.navigate(['./renter-dashboard/payment']);
    // this.purchase={
    //   grillId: this.grillId,
    //   renter: this.renter
    // }
    // // Add a new User 
    // this.service.buildAndCreatePurchase({ 
    //   grillId: this.purchase.grillId,
    //   renter: this.purchase.renter
     
    // },(err)=>{
      
    //   if(err! =null){
    //     console.log('Unable to Process request')
       
    //   }
    //   else{
    //     console.log("success");
    //     //this.router.navigate(['./renter-dashboard']);
    //     window.location.reload();
    //   }
    // })
  }
}
