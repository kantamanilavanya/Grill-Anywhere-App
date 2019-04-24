import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RenterService } from "../renter.service";
import { OwnerService } from "../owner.service";
import { ActivatedRoute,Router } from "@angular/router";


@Component({
  selector: 'app-owner-registration',
  templateUrl: './owner-registration.component.html',
  styleUrls: ['./owner-registration.component.css']
})
export class OwnerRegistrationComponent implements OnInit {

  private userForm:FormGroup
  private user:any
  public errorMessage:string
  private isSaved:boolean
  private users:any[]
  submitted = false;
  constructor(private builder:FormBuilder,private service:RenterService,private serviceOwner:OwnerService,private router : Router) {
    this.buildForm()
    this.buildFormOwner()
   }

  ngOnInit() {
  }
  buildForm() {
    this.userForm = this.builder.group({
      name: ['',Validators.required],
      email: ['',[
        Validators.required,
        Validators.email
      ]
      ],
      address: ['',Validators.required],
      phn_no: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  buildFormOwner() {
    this.userForm = this.builder.group({
      name: ['',Validators.required],
      email: ['',[
        Validators.required,
        Validators.email
      ]
      ],
      address: ['',Validators.required],
      phn_no: ['',Validators.required],
      password: ['',Validators.required]
    })
  }


  

  save(){
    this.submitted = true;
    //console.log(this.userForm)
    if(this.userForm.status !='INVALID'){
      //alert(JSON.stringify(this.userForm.value))
      this.user={
        name: this.userForm.controls['name'].value,
        email: this.userForm.controls['email'].value,
        address: this.userForm.controls['address'].value,
        phn_no: this.userForm.controls['phn_no'].value,
        password: this.userForm.controls['password'].value
      }
      // Add a new User 
      this.serviceOwner.buildAndCreateUser({ 
        name:this.user.name,
        email:this.user.email,
        address:this.user.address,
        phn_no:this.user.phn_no,
        password:this.user.password
      },(err)=>{
        if(err! =null){
          console.log('Unable to Process request')
         
        }else{
        this.userForm.reset();
        alert("You Have Succesfully Register")
        this.router.navigate(['./ownerLogin']);
          
        }
      })
      
    }else{
      this.errorMessage = 'Please verify your errors'
    }
  }
}
