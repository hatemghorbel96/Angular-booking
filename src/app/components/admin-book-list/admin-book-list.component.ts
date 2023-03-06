import { Component, OnInit } from '@angular/core';
import { CanceledRes } from 'src/app/model/canceled-res';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { StatistiqueService } from 'src/app/services/statistique.service';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {
  reservations!: Reservation[];
  cancled!: CanceledRes[];
  nbc!: number;
  todayres!: number;
  checkintoday!: number;
  incomingcheckin!: number;
  checkouttoday!: number;
  checkoutoutgoing!: number;
  constructor(private statistiqueService: StatistiqueService, private resserice: ReservationService) { }

  ngOnInit(): void {
        this.statistiqueService.getallReservations().subscribe(
          res => { this.reservations = res; }
        )

        this.resserice.getallCancledReservations().subscribe(
          cancel => {
            this.cancled = cancel

          }
        )

        this.resserice.cancledtoday().subscribe(
          res => {
            this.nbc = res

          })

        this.resserice.todayres().subscribe(
          cancel => {
            this.todayres = cancel

          }
        )

        this.resserice.checkintoday().subscribe(
          cancel => {
            this.checkintoday = cancel

          }
        )

        this.resserice.incomingcheckin().subscribe(
          cancel => {
            this.incomingcheckin = cancel

          }
        )

        this.resserice.checkouttoday().subscribe(
          cancel => {
            this.checkouttoday = cancel

          }
        )

        
        this.resserice.checkoutoutgoing().subscribe(
          cancel => {
            this.checkoutoutgoing = cancel

          }
        )
      }


}
