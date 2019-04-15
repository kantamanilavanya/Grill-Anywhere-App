import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GrillerService } from '../griller.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  constructor(private builder:FormBuilder,private router : Router,private service :GrillerService) { }
  private userForm:FormGroup
  private user:any
  private grillers:any[]
  ngOnInit() {
    this.onLoad()
      }
    
      buildForm() {
        this.userForm = this.builder.group({
         
          grillerType:['',Validators.required],
        })
      }
    
    onLoad(){
      this.user={
        grillerType:"Manual"
        }
      this.service.findByGrillerType(this.user,success=>{
        this.grillers=success;
      })
    }


    logout(){
      this.router.navigate(['/']);
     sessionStorage.clear();
    }

}
