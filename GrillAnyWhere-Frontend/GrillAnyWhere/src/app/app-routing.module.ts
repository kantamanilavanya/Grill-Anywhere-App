import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from "./home/home.component";
//import {LoginComponent} from "./login/login.component";
import { RegisterComponent} from './register/register.component';
import { ManualComponent} from "./manual/manual.component";
import { AutomaticComponent} from "./automatic/automatic.component";
import { FilterComponent} from "./filter/filter.component";
import { PaymentComponent } from "./payment/payment.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
    path: 'login',
    component: LoginComponent
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
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[HomeComponent,OwnerDashboardComponent,NotFoundComponent,LoginComponent,RegisterComponent]