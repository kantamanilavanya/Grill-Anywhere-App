import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { Console } from '@angular/core/src/console';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  message;

  constructor() { }

  // alertMsg(event){
  //   if(event){
  //     this.message="You Have Successfully Register";
  //   }
    //this.message="You Have Successfully Register";
  //}
}
