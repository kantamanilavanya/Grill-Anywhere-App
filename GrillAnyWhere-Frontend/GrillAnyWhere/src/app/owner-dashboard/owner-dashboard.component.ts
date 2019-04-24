


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, RouterLink } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GrillerService } from "../griller.service";
import * as $ from 'jquery'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  private userForm:FormGroup
  private user:any
  public errorMessage:string
  private isSaved:boolean
  private users:any[]
  private grillers:any[]
  public grillerFile:any=File;
  private grill:any
  byType
  angular: any;
  private delConfirm:boolean;

  constructor(private builder:FormBuilder,private service:GrillerService,private router : Router,private httpClient:HttpClient) { 
    this.buildForm()
  }

  ngOnInit() {
    this.onloadFun()
   
    
       
  }

  buildForm() {
    this.userForm = this.builder.group({
      grillName: ['',Validators.required],

      grillerType: ['',Validators.required],
      location: ['',Validators.required],
      grillerDescriptions: ['',Validators.required],
      price: ['',Validators.required],
      //grillImage:['',Validators.required],
      grillImage: ['']

    })
  }
  onFileSelect(event) {
   if (event.target.files.length > 0) {
     const file = event.target.files[0];
     this.userForm.get('grillImage').setValue(file);
   }
 }

  save(){
   const formData = new FormData();
   formData.append('file', this.userForm.get('grillImage').value);
   formData.append('grillName',this.userForm.get('grillName').value)
   formData.append('grillerType',this.userForm.get('grillerType').value)
   formData.append('price',this.userForm.get('price').value)
   formData.append('location',this.userForm.get('location').value)
    formData.append('grillerDescriptions',this.userForm.get('grillerDescriptions').value)

   this.httpClient.post<any>('http://localhost:8080//grillAnywhere/griller', formData).subscribe(
     (res) => console.log(res),
     (err) => console.log(err)
   );
    console.log(this.userForm.status)
    if(this.userForm.status !='INVALID'){
   
      this.service.buildAndCreateUser({
        grillName:this.user.grillName,
        grillerType:this.user.grillerType,
        location:this.user.location,
        grillerDescriptions:this.user.grillerDescriptions,
        price:this.user.price,
       image:this.user.image
      },(err)=>{
        if(err! =null){
          console.log('Unable to Process request')

        }else{
          //window.location.reload();
          this.onloadFun()

          this.userForm.reset();
          this.errorMessage = 'Grill Added Succesfully'


        }
      })

    }else{
      this.errorMessage = 'Please verify your errors'
    }
  }


  update(id){
   const formData = new FormData();
   formData.append('file', this.userForm.get('grillImage').value);
   formData.append('grillName',this.userForm.get('grillName').value)
   formData.append('grillerType',this.userForm.get('grillerType').value)
   formData.append('price',this.userForm.get('price').value)
   formData.append('location',this.userForm.get('location').value)
    formData.append('grillerDescriptions',this.userForm.get('grillerDescriptions').value)

   this.httpClient.put<any>('http://localhost:8080//grillAnywhere/griller/'+id, formData).subscribe(
     (res) => console.log(res),
     (err) => console.log(err),
     

          
   );
   this.onloadFun()
  
  }

  storeId(grillId){
   this.service.getGrillById(grillId,data=>{
    this.grill=data
    console.log(data.grillName)
    });
  }

  delete(grillId){
    this.delConfirm=confirm("Are You Sure Want to Delete This .... ?");

    if(this.delConfirm==true){
      this.service.deleteUser(grillId,data=>{
      this.onloadFun()
      })
  }
  }

  onloadFun(){
    this.service.getUser(success=>{
      this.grillers=success;
    });
    this.grill=""
  }


  filterOwnerSection(event){
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
    this.router.navigate(['/']);
   sessionStorage.clear();
  }
  
}