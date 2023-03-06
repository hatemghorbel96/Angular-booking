import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { StatistiqueService } from 'src/app/services/statistique.service';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
  SumPayedReservation!: number;
  avgDaily!:number;
  reservations!:Reservation[];
  constructor(private statistiqueService : StatistiqueService,private resserice : ReservationService) { }

  ngOnInit(): void {
    this.statistiqueService.sumRes().subscribe(
      sum => {this.SumPayedReservation=sum;}
    )

    this.resserice.dailyearning().subscribe(
      avg => {this.avgDaily=avg;}
    )

    this.statistiqueService.getallReservations().subscribe(
      res => {this.reservations=res;}
    )
  }

}
