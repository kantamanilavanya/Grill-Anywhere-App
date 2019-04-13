// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-owner-dashboard',
//   templateUrl: './owner-dashboard.component.html',
//   styleUrls: ['./owner-dashboard.component.css']
// })
// export class OwnerDashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, RouterLink } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GrillerService } from "../griller.service";
import * as $ from 'jquery'

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
  constructor(private builder:FormBuilder,private service:GrillerService) { 
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
        price: ['',Validators.required]
        
      })
    }
  
    onSelectFile(event){
      const file=event.target.files[0];
      console.log(file);
      this.grillerFile=file;
    }
    save(submitForm:FormGroup){
      console.log("into save func");
      if(submitForm.valid){
        console.log("into save func if");
        const grill=submitForm.value;
        const formData=new FormData();
        formData.append('grill',JSON.stringify(grill));
        formData.append('file',this.grillerFile);

        this.service.saveGriller(formData).subscribe((response) =>{
          console.log(response);
        });
      }



      // console.log(this.userForm.status)
      // if(this.userForm.status !='INVALID'){
      //   //alert(JSON.stringify(this.userForm.value))
      //   this.user={
      //     grillName: this.userForm.controls['grillName'].value,
      //     grillerType: this.userForm.controls['grillerType'].value,
      //     location: this.userForm.controls['location'].value,
      //     grillerDescriptions: this.userForm.controls['grillerDescriptions'].value,
      //     price: this.userForm.controls['price'].value
          
      //   }

      //   const grill=this.userForm.value;
      //   console.log("into grill : "+grill);
      //   // Add a new User 
      //   this.service.buildAndCreateUser({ 
      //     grillName:this.user.grillName,
      //     grillerType:this.user.grillerType,
      //     location:this.user.location,
      //     grillerDescriptions:this.user.grillerDescriptions,
      //     price:this.user.price
          
      //   },(err)=>{
      //     if(err! =null){
      //       console.log('Unable to Process request')
           
      //     }else{
      //       //window.location.reload();
      //       this.onloadFun()
            
      //       this.userForm.reset();
      //       this.errorMessage = 'Grill Added Succesfully'

            
      //     }
      //   })
        
      // }else{
      //   this.errorMessage = 'Please verify your errors'
      // }
    }

    onloadFun(){
      this.service.getUser(success=>{
        //console.log(success);
        this.grillers=success;
      });
    }
  
  // logout(){
  //   sessionStorage.removeItem('uname');
  //   this.router.navigate(['/'])
  //   window.location.reload();
  // }

  
}