import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { TrainListComponent } from './train-list/train-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UserComponent } from './user/user.component';
import { AddTrainComponent } from './_admin/add-train/add-train.component';
import { AdminTrainListComponent } from './_admin/admin-train-list/admin-train-list.component';
import { UpdateTrainComponent } from './_admin/update-train/update-train.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminDailogComponent } from './_admin/admin-dailog/admin-dailog.component';
import {MatIconModule} from '@angular/material/icon';
import { BookingComponent } from './_user/booking/booking.component';
import { BookingDetailsComponent } from './_user/booking-details/booking-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UserRegistrationComponent } from './_user/user-registration/user-registration.component';
import Swal from 'sweetalert2';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { StripeComponent } from './stripe-payment-gateway/stripe/stripe.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    TrainListComponent,
    AdminComponent,
    ForbiddenComponent,
    UserComponent,
    AddTrainComponent,
    AdminTrainListComponent,
    UpdateTrainComponent,
    AdminDailogComponent,
    BookingComponent,
    BookingDetailsComponent,
    UserRegistrationComponent,
    StripeComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
