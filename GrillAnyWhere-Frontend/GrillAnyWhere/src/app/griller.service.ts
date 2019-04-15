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


  createUser(userObj: any, callback) {
    console.log(JSON.stringify(userObj));
    this.http
      .post(this._url, userObj).subscribe(response => {
        console.log("sercice")
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





  buildAndCreateUser(user: any, callback) {

    // build user object
    let userObj: any = {

      grillName: user.grillName,
      grillerType: user.grillerType,
      location: user.location,
      grillerDescriptions: user.grillerDescriptions,
      price: user.price

    }
    this.createUser(userObj, (err) => {
      callback(err)
    })

  }
}
