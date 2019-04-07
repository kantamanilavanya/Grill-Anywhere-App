import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RenterService } from "../renter.service";
import { OwnerService } from "../owner.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private userForm:FormGroup
  private user:any
  public errorMessage:string
  private isSaved:boolean
  private users:any[]

  constructor(private builder:FormBuilder,private service:RenterService,private serviceOwner:OwnerService) {
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
      this.service.buildAndCreateUser({ 
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
        alert("Data inserted Succesfully")
          
        }
      })
      
    }else{
      this.errorMessage = 'Please verify your errors'
    }
  }

  saveOwner(){
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
          alert("Data inserted Succesfully")
          
        }
      })
      
    }else{
      this.errorMessage = 'Please verify your errors'
    }
  }
  
}
