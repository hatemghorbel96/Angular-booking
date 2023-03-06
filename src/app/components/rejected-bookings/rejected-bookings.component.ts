import { Component, OnInit } from '@angular/core';
import { CanceledRes } from 'src/app/model/canceled-res';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-rejected-bookings',
  templateUrl: './rejected-bookings.component.html',
  styleUrls: ['./rejected-bookings.component.css']
})
export class RejectedBookingsComponent implements OnInit {
  cancled!:CanceledRes[] ;
  constructor(private reservationservice: ReservationService) { }

  ngOnInit(): void {
    this.reservationservice.getallCancledReservations().subscribe(
      data => {this.cancled=data;}
    )
  }

}
