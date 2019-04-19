import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userForm:FormGroup
  private user:any
  errorMessage:string
  private isSaved:boolean
  private users:any[]

  constructor(private builder:FormBuilder,private router : Router) { 
  this.buildForm()
  }
  ngOnInit() {
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
  save() {
    this.user={
    email:this.userForm.controls['email'].value,
    password:this.userForm.controls['password'].value
    }
   
    
    if(this.userForm.controls['email'].value=="lavanya@gmail.com" && this.userForm.controls['password'].value=="lavanya@07" ){
      
      this.router.navigate(['./owner-dashboard']);
      //window.location.reload();
    }else
    {
      alert("please provide valid data to login");
      this.userForm.reset();
      
    }
  
  }
  saveData() {
    this.user={
    email:this.userForm.controls['email'].value,
    password:this.userForm.controls['password'].value
    }
    
   
    
    if(this.userForm.controls['email'].value=="lavanya@gmail.com" && this.userForm.controls['password'].value=="lavanya@07" ){
      
      
      this.router.navigate(['./renter-dashboard']);
     // window.location.reload();
    }else
    {
      alert("please provide valid data to login")
      this.userForm.reset();
    }
    
  }
    
    
  }


