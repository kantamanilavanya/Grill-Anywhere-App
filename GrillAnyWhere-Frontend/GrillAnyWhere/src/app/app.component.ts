import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GrillAnyWhere';
  msg;
  msg1;
  ngOnInit() {

    $('body').addClass('df');
    this.msg=sessionStorage.getItem('uname');
    this.msg1=sessionStorage.getItem('ownername');
  
    }
}
