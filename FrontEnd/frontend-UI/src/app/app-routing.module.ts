import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StripeComponent } from './stripe-payment-gateway/stripe/stripe.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TrainListComponent } from './train-list/train-list.component';
import { UserComponent } from './user/user.component';
import { AddTrainComponent } from './_admin/add-train/add-train.component';
import { AdminTrainListComponent } from './_admin/admin-train-list/admin-train-list.component';
import { UpdateTrainComponent } from './_admin/update-train/update-train.component';
import { BookingDetailsComponent } from './_user/booking-details/booking-details.component';
import { BookingComponent } from './_user/booking/booking.component';
import { UserRegistrationComponent } from './_user/user-registration/user-registration.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full',
  },

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },

  {
    path: 'login',
    component:LoginComponent,
    
  },

  {
    path:'train-list',
    component:TrainListComponent,
  },

  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuard], data:{roles:['Admin']}
  },

  {
    path:'user',
    component:UserComponent,
    canActivate:[AuthGuard], data:{roles:['User']}
  },

  {
    path:'admin-train-details',
    component: AdminTrainListComponent,
    canActivate:[AuthGuard], data:{roles:['Admin']}
  },

  {
    path:'add-train',
    component: AddTrainComponent,
    canActivate:[AuthGuard], data:{roles:['Admin']}
  },

  {
    path:'update-train/:trainId',
    component:UpdateTrainComponent,
    canActivate:[AuthGuard], data:{roles:['Admin']}
  },

  {
    path:'booking',
    component:BookingComponent,
    canActivate:[AuthGuard], data:{roles:['User']}
  },

  {
    path:'booking-details',
    component:BookingDetailsComponent,
    canActivate:[AuthGuard], data:{roles:['User']}
  },

  { path: 'forbidden', 
    component: ForbiddenComponent 
  },

  {
    path: 'registration',
    component: UserRegistrationComponent
  },
  
  {
    path: 'stripe-payment',
    component: StripeComponent,
    canActivate:[AuthGuard], data:{roles:['User']}
  },

  {
    path : 'thankyou',
    component: ThankYouComponent,
    canActivate:[AuthGuard], data:{roles:['User']}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
