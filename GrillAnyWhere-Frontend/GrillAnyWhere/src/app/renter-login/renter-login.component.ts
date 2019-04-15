import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RenterService } from '../renter.service';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-renter-login',
  templateUrl: './renter-login.component.html',
  styleUrls: ['./renter-login.component.css']
})
export class RenterLoginComponent implements OnInit {
  private userForm:FormGroup
  private user:any
  errorMessage:string
  private isSaved:boolean
  private users:any[]
  submitted = false;

  constructor(private builder:FormBuilder,private router : Router,private renter:RenterService) { 
  this.buildForm()
  }
  ngOnInit() {
    this.renter.getUser(success=>{
      this.users=success;
    });
  }
  onloadFun(){
    this.renter.getUser(success=>{
      this.users=success;
    });
  }
  buildForm() {
    this.userForm = this.builder.group({
     
      email: ['',[
        Validators.required,
        Validators.email
      ]
      ],
      password: ['',Validators.required],
    })
  }
  get f() { return this.userForm.controls; }
  save() {
    this.submitted = true;
    this.user={
    email:this.userForm.controls['email'].value,
    password:this.userForm.controls['password'].value
    }
   
    this.users.forEach(function(user){

      console.log(user);
    
      if(this.userForm.controls['email'].value==this.user.email && this.userForm.controls['password'].value==this.user.password ){
        
        this.router.navigate(['/renter-dashboard']);
      
      }
      else
      {
        alert("please provide valid data to login");
        this.userForm.reset();
      } 
      
      });
    
    }
  }
   
   
  
  