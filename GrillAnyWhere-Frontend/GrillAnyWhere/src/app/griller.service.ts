import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import { error } from '@angular/compiler/src/util';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ContentType } from '@angular/http/src/enums';
//import {angular} from "angular";
//import  { angular } from "angular";
@Injectable({
  providedIn: 'root'
})
export class GrillerService {
private _url:string = 'http://localhost:8080//grillAnywhere/griller';
  //private file:File
  //private formData: FormData = new FormData();
  private config:any
  private array:any[]
  private userForm:FormGroup
  
  constructor(private http:HttpClient,private fb:FormBuilder) { }
  createUser(userObj:any,callback){
    
    let file: File =userObj.grillImage;
        let formData:FormData = new FormData();
      //this.file = userObj.grillImage
    console.log(userObj.grillImage);
    formData.append('file',userObj.grillImage);
    let headers: Headers = new Headers()
    headers.append('Content-Type', 'multipart/form-data;boundary=imageUpload');
    //formData.append('Content-Type', undefined);
    //this.formData.append("grillName",userObj.grillName);
    console.log(formData.get("file"));
    // let headers = new Headers();
    //     headers.append('Content-Type', undefined);
    //     headers.append('Accept', 'application/json');
    //     let options = new RequestOptions({ headers: headers });
    //  console.log(JSON.stringify(userObj));
    this.http
    .post(this._url,formData,{headers:{
      'Content-Type':'multipart/form-data;boundary=imageUpload'
  }}).subscribe(response=>{
      
      console.log("service")
      callback(null)
    },error=>{
      callback(error)
    })
   }

   
   getUser(callback){
     this.http.get(this._url).subscribe(data=>{
callback(data)
console.log(data)},error=>{

console.log('unable to process request')

     })
   }

   deleteUser(grillId,callback){
    this.http.delete(this._url+"/"+grillId).subscribe(data=>{
callback(data)
console.log(data)},error=>{

console.log('unable to process request')

    })
  }
  getGrillById(grillId,callback){
    this.http.get(this._url+"/byID/"+grillId).subscribe(data=>{
callback(data)
console.log(data)},error=>{

console.log('unable to process request')

    })
  }


   getGrillerAutomatic(callback){
    this.http.get(this._url+"/byGrillerType/AutomaticGriller").subscribe(data=>{
callback(data)
console.log(data)},error=>{

console.log('unable to process request')

    })
  }
  getGrillerManual(callback){
    this.http.get(this._url+"/byGrillerType/ManualGriller").subscribe(data=>{
callback(data)
console.log(data)},error=>{

console.log('unable to process request')

    })
  }


  buildAndCreateUser(user:any,callback){
  
    // build user object
    let userObj:any ={
    
      grillName: user.grillName,
      grillerType: user.grillerType,
      location:user.location,
      grillerDescriptions:user.grillerDescriptions,
      price:user.price,
      grillImage:user.grillImage
      
    }
    
    this.createUser(userObj,(err)=>{
      callback(err)
    })
  
 }
}
