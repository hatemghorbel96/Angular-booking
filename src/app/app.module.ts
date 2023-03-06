import { CUSTOM_ELEMENTS_SCHEMA, NgModule, SchemaMetadata } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AddAirlineComponent } from './components/add-airline/add-airline.component';
import { ListAirlineComponent } from './components/list-airline/list-airline.component';
import { VolComponent } from './components/vol/vol.component';
import { AddVolComponent } from './components/add-vol/add-vol.component';
import { ListVolComponent } from './components/list-vol/list-vol.component';
import { MatExpansionModule, MatSelectModule, MatSlideToggleModule, MatStepperModule } from '@angular/material';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { VolDetailsComponent } from './components/vol-details/vol-details.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { ListhotelComponent } from './components/listhotel/listhotel.component';
import { DetailshotelComponent } from './components/detailshotel/detailshotel.component';
import { SafeHtmlPipe } from './safe-htmlpipe';
import { AddTourComponent } from './components/add-tour/add-tour.component';
import { ListTourComponent } from './components/list-tour/list-tour.component';
import { TourDetailsPrivateComponent } from './components/tour-details-private/tour-details-private.component';
import { NgxSplideModule } from 'ngx-splide';
import { UpdateVolComponent } from './components/update-vol/update-vol.component';
import { CarComponent } from './components/car/car.component';
import { ListCouponComponent } from './components/list-coupon/list-coupon.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { ReservationSuccessComponent } from './components/reservation-success/reservation-success.component';
import { AdminListTourComponent } from './components/admin-list-tour/admin-list-tour.component';
import { AddActivityTourComponent } from './components/add-activity-tour/add-activity-tour.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SumPipeModule } from './sum-pipe';
import { AdminBookListComponent } from './components/admin-book-list/admin-book-list.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { AdminListHotelComponent } from './components/admin-list-hotel/admin-list-hotel.component';
import { AdminToursComponent } from './components/admin-tours/admin-tours.component';
import { DateAsAgoPipe } from './date-as-ago.pipe';
import { DecimalPipePipe } from './decimal-pipe.pipe';
import { RejectedBookingsComponent } from './components/rejected-bookings/rejected-bookings.component';
import { AllReviewsComponent } from './components/all-reviews/all-reviews.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NotifComponent } from './components/notif/notif.component';
import { UserMybookingComponent } from './components/user-mybooking/user-mybooking.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { MyFilterPipe } from './my-filter.pipe';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddAirlineComponent,
    ListAirlineComponent,
    VolComponent,
    AddVolComponent,
    ListVolComponent,
    ReservationComponent,
    TourDetailsComponent,
    VolDetailsComponent,
    AddHotelComponent,
    ListhotelComponent,
    DetailshotelComponent, SafeHtmlPipe,
    AddTourComponent,
    ListTourComponent,
    TourDetailsPrivateComponent,
    UpdateVolComponent,
    CarComponent,
    ListCouponComponent,
    AddCouponComponent,
    ReservationSuccessComponent,
    AdminListTourComponent,
    AddActivityTourComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AdminBookListComponent,
    EarningsComponent,
    AdminListHotelComponent,
    AdminToursComponent,
    DateAsAgoPipe,
    DecimalPipePipe,
    RejectedBookingsComponent,
    AllReviewsComponent,
    NotifComponent,
    UserMybookingComponent,
    UserMenuComponent,
    FilterPipePipe,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, SumPipeModule, 
    CommonModule, NgxSplideModule, MatStepperModule, MatExpansionModule, CdkAccordionModule, NgApexchartsModule, NgxPageScrollModule, NgxSplideModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [SumPipeModule,DateAsAgoPipe,SocketService],
  bootstrap: [AppComponent], exports: [
    DateAsAgoPipe
  ]
  
})
export class AppModule { }

