import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from "./home/home.component";
//import {LoginComponent} from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ManualComponent} from "./manual/manual.component";
import { AutomaticComponent} from "./automatic/automatic.component";
import { FilterComponent} from "./filter/filter.component";
import { PaymentComponent } from "./payment/payment.component";
import { OwnerLoginComponent } from "./owner-login/owner-login.component";
import { RenterLoginComponent } from "./renter-login/renter-login.component";
import { OwnerRegistrationComponent } from "./owner-registration/owner-registration.component";
import { RenterRegistrationComponent } from "./renter-registration/renter-registration.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'manual',
    component: ManualComponent
  },
  {
    path: 'automatic',
    component: AutomaticComponent
  },
  {
    path: 'ownerLogin',
    component: OwnerLoginComponent
  },
  {
    path: 'renterLogin',
    component: RenterLoginComponent
  },
  {
    path: 'renter-dashboard',
    component: RenterDashboardComponent
  },
  {
    path: 'owner-dashboard',
    component: OwnerDashboardComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'renter-dashboard/payment',
    component: PaymentComponent
  },
  {
    path: 'ownerRegistration',
    component: OwnerRegistrationComponent
  },
  {
    path: 'renterRegistration',
    component: RenterRegistrationComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[HomeComponent,OwnerDashboardComponent,NotFoundComponent,OwnerLoginComponent,RenterLoginComponent]