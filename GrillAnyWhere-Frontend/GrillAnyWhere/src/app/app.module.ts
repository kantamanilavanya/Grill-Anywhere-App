import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManualComponent } from './manual/manual.component';
import { AutomaticComponent } from './automatic/automatic.component';

import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { FilterComponent } from './filter/filter.component';
import { GrillerInfoComponent } from './griller-info/griller-info.component';
import { PaymentComponent } from './payment/payment.component';

import { AlertComponent } from './alert/alert.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

//import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
//import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
//import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    //RenterDashboardComponent,
    //NotFoundComponent
    routingComponent,
    NavBarComponent,
    ManualComponent,
    AutomaticComponent,
    
    OwnerDashboardComponent,
    
    RenterDashboardComponent,
    
    FilterComponent,
    
    GrillerInfoComponent,
    
    PaymentComponent
    //OwnerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
