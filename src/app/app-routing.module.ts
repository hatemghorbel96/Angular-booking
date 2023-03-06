import { UserMybookingComponent } from './components/user-mybooking/user-mybooking.component';
import { AllReviewsComponent } from './components/all-reviews/all-reviews.component';
import { RejectedBookingsComponent } from './components/rejected-bookings/rejected-bookings.component';
import { AdminToursComponent } from './components/admin-tours/admin-tours.component';
import { AdminListHotelComponent } from './components/admin-list-hotel/admin-list-hotel.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { UpdateVolComponent } from './components/update-vol/update-vol.component';
import { DetailshotelComponent } from './components/detailshotel/detailshotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './components/add-airline/add-airline.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { AddVolComponent } from './components/add-vol/add-vol.component';
import { HomeComponent } from './components/home/home.component';
import { ListAirlineComponent } from './components/list-airline/list-airline.component';
import { ListVolComponent } from './components/list-vol/list-vol.component';
import { ListhotelComponent } from './components/listhotel/listhotel.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { VolDetailsComponent } from './components/vol-details/vol-details.component';
import { VolComponent } from './components/vol/vol.component';
import { AddTourComponent } from './components/add-tour/add-tour.component';
import { ListTourComponent } from './components/list-tour/list-tour.component';
import { TourDetailsPrivateComponent } from './components/tour-details-private/tour-details-private.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { ListCouponComponent } from './components/list-coupon/list-coupon.component';
import { ReservationSuccessComponent } from './components/reservation-success/reservation-success.component';
import { AdminListTourComponent } from './components/admin-list-tour/admin-list-tour.component';
import { AddActivityTourComponent } from './components/add-activity-tour/add-activity-tour.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminBookListComponent } from './components/admin-book-list/admin-book-list.component';

const routes: Routes = [
  {path: "mybooking", component : UserMybookingComponent},
  {path: "allreview", component : AllReviewsComponent},
  {path: "cancled", component : RejectedBookingsComponent},
  {path: "earnings", component : EarningsComponent},
  {path: "admin-list-res", component : AdminBookListComponent},
  {path: "admin-dash", component : AdminDashboardComponent},
  {path: "res-success", component : ReservationSuccessComponent},
  {path: "addcoupon", component : AddCouponComponent},
  {path: "listcoupon", component : ListCouponComponent},
  {path: "addtour", component : AddTourComponent},
  {path: "admintour", component : AdminToursComponent},
  {path: "adminlisttour", component : AdminListTourComponent},
  {path: "listtour", component : ListTourComponent},
  {path: "listhotel", component : ListhotelComponent},
  {path: "showtour/:id", component : TourDetailsPrivateComponent},
  {path: "detailshotel/:id", component : DetailshotelComponent},
  {path: "adminlisthotel", component : AdminListHotelComponent},
  {path: "listhotel", component : ListhotelComponent},
  {path: "addhotel", component : AddHotelComponent},
  {path: "reserve/:id", component : ReservationComponent},
  {path: "login", component : LoginComponent},
  {path: "register", component : RegisterComponent},
  {path: "", component : HomeComponent},
  {path: "addairline", component : AddAirlineComponent},
  {path: "listairline", component : ListAirlineComponent},
  {path: "vol", component : VolComponent},
  {path: "addvol", component : AddVolComponent},
  {path: "listvol", component : ListVolComponent},
  {path: "voldetails/:id", component : VolDetailsComponent},
  {path: "updatevol/:id", component : UpdateVolComponent},
  {path: "tourdetails/:id", component : TourDetailsComponent},
  {path: "addActivitytoTour/:id", component : AddActivityTourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
