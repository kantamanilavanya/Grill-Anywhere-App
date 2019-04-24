import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ManualComponent } from './manual/manual.component';
import { AutomaticComponent } from './automatic/automatic.component';

import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { FilterComponent } from './filter/filter.component';
import { GrillerInfoComponent } from './griller-info/griller-info.component';
import { PaymentComponent } from './payment/payment.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { RenterLoginComponent } from './renter-login/renter-login.component';
import { OwnerRegistrationComponent } from './owner-registration/owner-registration.component';
import { RenterRegistrationComponent } from './renter-registration/renter-registration.component';

//import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
//import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
//import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
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
    
    PaymentComponent,
    
    OwnerLoginComponent,
    
    RenterLoginComponent,
    
    OwnerRegistrationComponent,
    
    RenterRegistrationComponent
    //OwnerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
