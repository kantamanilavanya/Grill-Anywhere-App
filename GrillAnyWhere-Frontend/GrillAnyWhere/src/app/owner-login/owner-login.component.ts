import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from '../login.service';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';


@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent implements OnInit {

  private userForm:FormGroup
  private user:any
  errorMessage:string
  private isSaved:boolean
  private users:any[]
  flag;
  msg;
  
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
   
    
    if(this.userForm.controls['email'].value=="lavanya@gmail.com" && this.userForm.controls['password'].value=="lavanya@08" ){
      
      sessionStorage.setItem('renter',this.userForm.controls['email'].value);
      this.router.navigate(['./owner-dashboard']);
     // window.location.reload();
    }else
    {
      alert("please provide valid data to login");
      this.userForm.reset();
      
    }
  
  }

}
