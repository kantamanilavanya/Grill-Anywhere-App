import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OwnerService} from '../owner.service';
import { forEach } from '@angular/router/src/utils/collection';


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
  submitted = false;
  

  constructor(private builder:FormBuilder,private router : Router,private service:OwnerService) { 
  this.buildForm()
  }
  ngOnInit() {
    this.service.getUser(success=>{
      this.users=success;
    });
    console.log(this.users)
    
  }
  onloadFun(){
    this.service.getUser(success=>{
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
  saveData() {
    this.submitted = true;
    this.user={
    email:this.userForm.controls['email'].value,
    password:this.userForm.controls['password'].value
    }
    this.service.getUser(success=>{
      this.users=success;
    })
    this.users.forEach(function(user){

    console.log(user);
  
    if(this.userForm.controls['email'].value==this.user.email && this.userForm.controls['password'].value==this.user.password ){
      
      this.router.navigate(['/owner-dashboard']);
     // window.location.reload();
    }
    else
    {
      alert("please provide valid data to login");
      this.userForm.reset();
    } 
    
    });
  
  }
}
 
 


