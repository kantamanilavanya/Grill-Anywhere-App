import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GrillerService } from '../griller.service';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.css']
})
export class AutomaticComponent implements OnInit {
  constructor(private builder:FormBuilder,private router : Router,private service :GrillerService) { }
  private userForm:FormGroup
  private user:any
  private grillers:any[]
  grillName;
  location;
  grillerType;
  price;
  grillerDescriptions;
  grillImage
  byType;
  grillId
  renter
  ngOnInit() {
    this.onLoad()
      }
    
      buildForm() {
        this.userForm = this.builder.group({
         
          grillerType:['',Validators.required],
        })
      }
    
    onLoad(){
      this.user={
        grillerType:"AutomaticGriller"
        }
      this.service.findByGrillerType(this.user,success=>{
        this.grillers=success;
      })
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
     
    }
  
}
