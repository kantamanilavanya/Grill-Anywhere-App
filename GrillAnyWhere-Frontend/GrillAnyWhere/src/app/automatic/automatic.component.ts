import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GrillerService } from '../griller.service';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.css']
})
export class AutomaticComponent implements OnInit {
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
        grillerType:"AutomaticGriller"
        }
      this.service.findByGrillerType(this.user,success=>{
        this.grillers=success;
      })
    }

}
