import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { Console } from '@angular/core/src/console';

@Injectable({
  providedIn: 'root'
})
export class GrillerService {

  private _url: string = 'http://localhost:8080//grillAnywhere/griller'
  constructor(private http: HttpClient) { }

  saveGriller(formData: FormData): Observable<any> {
    return this.http.post(this._url, formData);
  }




  findByGrillerType(user, callback) {
    this.http.get(this._url + '/byGrillerType/' + user.grillerType).subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }
  findByLocation(user, callback) {
    this.http.get(this._url + '/byGrillerLocation/' + user.location).subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }

  findByPrice(user, callback) {
    this.http.get(this._url + '/byPrice/' + user.price).subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }

  findByType(user, callback) {
    this.http.get(this._url + '/byType/' + user.grillerType).subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }








  //lavanya
  createUser(userObj: any, callback) {

    let file: File = userObj.grillImage;
    let formData: FormData = new FormData();
    //this.file = userObj.grillImage
    console.log(userObj.grillImage);
    formData.append('file', userObj.grillImage);
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
      .post(this._url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data;boundary=imageUpload'
        }
      }).subscribe(response => {

        console.log("service")
        callback(null)
      }, error => {
        callback(error)
      })
  }


  getUser(callback) {
    this.http.get(this._url).subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }

  deleteUser(grillId, callback) {
    this.http.delete(this._url + "/" + grillId).subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }
  getGrillById(grillId, callback) {
    this.http.get(this._url + "/byID/" + grillId).subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }


  getGrillerAutomatic(callback) {
    this.http.get(this._url + "/byGrillerType/AutomaticGriller").subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }
  getGrillerManual(callback) {
    this.http.get(this._url + "/byGrillerType/ManualGriller").subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }


  buildAndCreateUser(user: any, callback) {

    // build user object
    let userObj: any = {

      grillName: user.grillName,
      grillerType: user.grillerType,
      location: user.location,
      grillerDescriptions: user.grillerDescriptions,
      price: user.price,
      grillImage: user.grillImage

    }

    this.createUser(userObj, (err) => {
      callback(err)
    })

  }


  addRenterintoGriller(user, callback) {
    this.http.get(this._url + '/byRenter/' + user.renter).subscribe(data => {
      callback(data)
      console.log(data)
    }, error => {

      console.log('unable to process request')

    })
  }

  createPurchase(purchaseObj:any,callback){
    this.http
    .post(this._url+'/purchase',purchaseObj).subscribe(response=>{
      callback(null)
    },error=>{
      callback(error)
    })
   }
  buildAndCreatePurchase(purchase:any,callback){
   
    let purchaseObj:any ={
      grillId: purchase.grillId,
      renter: purchase.renter,
      name:purchase.name,
      address:purchase.address,
      phn_no:purchase.phn_no,
      amount:purchase.amount
      
    }
    this.createPurchase(purchaseObj,(err)=>{
      callback(err)
    })
 
 }

 findGrillerByRenter(user, callback) {
  this.http.get(this._url + '/byRenter/' + user.renter).subscribe(data => {
    callback(data)
    console.log(data)
  }, error => {

    console.log('unable to process request')

  })
}
  
}
