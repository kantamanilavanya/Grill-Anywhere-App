import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GrillerService } from '../griller.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private userForm:FormGroup
  private user:any
  errorMessage:string
  private isSaved:boolean
  private users:any[]

  constructor(private builder:FormBuilder,private router : Router,private service :GrillerService) { 
  this.buildForm()
  }
 
  private grillers:any[];
  ngOnInit() {
   
  }
  buildForm() {
    this.userForm = this.builder.group({
     
      price: ['',Validators.required],
      location: ['',Validators.required],
      grillerType:['',Validators.required],
    })
  }

  
  saveData() {
    this.user={
    location:this.userForm.controls['location'].value
    }
    
    if(1){
      
     this.service.findByLocation(this.user,success=>{
       this.grillers=success;
     });
     this.userForm.reset();
    }else
    {
      alert("please provide price value")
      this.userForm.reset();
    }
    
  }
 

  save() {

    this.user={
    price:this.userForm.controls['price'].value
    }
   
    
    if(1){
      
      this.service.findByPrice(this.user,success=>{
        this.grillers=success;
      });
      this.userForm.reset();
    }else
    {
      alert("please provide valid price ");
      this.userForm.reset();
      
    }
  
  }
   

  saveDataType() {

    this.user={
    grillerType:this.userForm.controls['grillerType'].value
    }
    
    if(1){
      
     this.service.findByGrillerType(this.user,success=>{
       this.grillers=success;
     });
     this.userForm.reset();
    }else
    {
      alert("please provide grillerType value")
      this.userForm.reset();
    }
    
  }


  onLoad(){
    this.service.getUser(success=>{
      this.grillers=success;
    })
  }


  logout(){
      // sessionStorage.removeItem('uname');
       this.router.navigate(['/'])
  }

}
