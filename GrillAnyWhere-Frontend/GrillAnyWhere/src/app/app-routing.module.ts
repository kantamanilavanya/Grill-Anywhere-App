import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenterDashboardComponent } from './renter-dashboard/renter-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ManualComponent} from "./manual/manual.component";
import { AutomaticComponent} from "./automatic/automatic.component";
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
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[HomeComponent,RenterDashboardComponent,OwnerDashboardComponent,NotFoundComponent,RegistrationComponent,LoginComponent ]