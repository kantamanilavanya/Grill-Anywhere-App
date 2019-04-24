import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { GrillerService } from "../griller.service";
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
//import {  } from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private grillers:any[]
  grillName;
  location;
  grillerType;
  price;
  grillerDescriptions;
  flag;
  byType;

  private userForm:FormGroup
  private user:any
  constructor(private service:GrillerService,private router: Router) { 
   
  }

  ngOnInit() {
    $(document).ready(() => {
      $('#rentBtn').click(()=>{
        $('#grillerInfoModal').hide();
        
        location.reload();
      });
    });


    $(document).ready(function(){
  
      $('#searchbar-icon').click(function(){
        $('#searchbar-input').animate({width: 'toggle'});
        $("#searchbar-icon").toggle();
        $("#searchbar-cross").toggle(500);
      });
      
      $('#searchbar-cross').click(function(){
        $('#searchbar-input').animate({width: 'toggle'});
        $("#searchbar-cross").toggle();
        $("#searchbar-icon").toggle(500);
      });
      
     
    });

    this.onloadFun();

    $('#year').text(new Date().getFullYear());

    // Configure Slider
    $('.carousel').carousel({
      interval: 6000,
      pause: 'hover'
    });

    // Lightbox Init
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

    // Video Play
    $(function () {
      // Auto play modal video
      $(".video").click(function () {
        var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-video"),
          videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
          $(theModal + ' iframe').attr('src', videoSRC);
        });
      });
    });
  }
  

  onloadFun(){
    this.service.getUser(success=>{
         this.grillers=success;
         console.log("in home "+this.grillers);
    });
  }

  grillerInfo(grillName,price,grillerDescriptions,grillerType,location){
    console.log("into grillerInfo"+grillName+","+price+","+grillerDescriptions+","+grillerType+","+location);

    this.grillName=grillName;
    this.location=location;
    this.grillerType=grillerType;
    this.grillerDescriptions=grillerDescriptions;
    this.price=price;
  }

  rentFunc(){
    console.log("into rent func");
    this.setFlag();
    
     this.router.navigate(['./renterLogin']);
     
  }

  setFlag(){
    console.log("into setFlag");
    this.flag=1;
    sessionStorage.setItem('flagMsg',this.flag);
  }


  searchBarFilter(event){
    //var text = document.getElementsByName("searchbar-input").value;
    console.log("in searchBar: "+event);
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


    dropDownFilter(event){
      console.log("in dropDown: "+event);
      if(event!='Choose City'){
        this.user={
          location:event
          }
          
          if(1){
            
           this.service.findByLocation(this.user,success=>{
             this.grillers=success;
           });
      }
      }
      else{
        this.service.getUser(success=>{
          this.grillers=success;
          console.log("in home "+this.grillers);
     });
      
      }
      
  }
}
