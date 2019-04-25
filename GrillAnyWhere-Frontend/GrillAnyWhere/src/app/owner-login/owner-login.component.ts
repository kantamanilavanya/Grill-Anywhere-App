import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from '../login.service';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';
import { OwnerService } from "../owner.service";


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
  owner;
  
  constructor(private builder:FormBuilder,private router : Router,private ownerService : OwnerService) { 
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
   
    
    if(this.userForm.controls['email'].value=="new@gmail.com" && this.userForm.controls['password'].value=="new" ){
      
      this.user={
        name:this.userForm.controls['email'].value
        }
        
        if(1){
          
         this.ownerService.findByOwner(this.user,success=>{
           this.owner=success;
           console.log("owner : "+this.owner.name);
         });
        }

        
        
      sessionStorage.setItem('owner',this.owner);
      this.router.navigate(['./owner-dashboard']);
     // window.location.reload();
    }else
    {
      alert("please provide valid data to login");
      this.userForm.reset();
      
    }
  
  }

}
