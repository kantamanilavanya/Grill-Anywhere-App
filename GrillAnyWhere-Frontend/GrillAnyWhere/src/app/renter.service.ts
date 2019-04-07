import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RenterService {
  private _url:string = 'http://localhost:5200'
  constructor(private http:HttpClient) { }

  getMaxId(callback){
    this.http
    .get(this._url+'/user/find/id/max')
    .subscribe(data=>{
      callback(data)
    },error=>{
      console.log('Unable to Process the request')
    })
   }
   createUser(userObj:any,callback){
    this.http
    .post(this._url+'/user/add',userObj).subscribe(response=>{
      callback(null)
    },error=>{
      callback(error)
    })
   }
   buildAndCreateUser(user:any,callback){
    this.getMaxId((data)=>{
      // build user object
      let userObj:any ={
        _id: parseInt(data.maxId) + 1,
        name: user.name,
        email: user.email,
        address:user.address,
        phn_no:user.phn_no,
        password:user.password
      }
      this.createUser(userObj,(err)=>{
        callback(err)
      })
    })
   }
}
