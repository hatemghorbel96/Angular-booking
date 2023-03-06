import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { Vol } from 'src/app/model/vol';

@Component({
  selector: 'app-reservation-success',
  templateUrl: './reservation-success.component.html',
  styleUrls: ['./reservation-success.component.css']
})
export class ReservationSuccessComponent implements OnInit {
  reservation: Reservation;
  vol: Vol;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['reservation']) {
        this.reservation = JSON.parse(params['reservation']);
      }
      if (params['vol']) {
        this.vol = JSON.parse(params['vol']);
      }
    });
  }
}
