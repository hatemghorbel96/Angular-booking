import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-user-mybooking',
  templateUrl: './user-mybooking.component.html',
  styleUrls: ['./user-mybooking.component.css'],
  providers: [DatePipe]
})
export class UserMybookingComponent implements OnInit {
  myres!: Reservation[]
  myrescheckout!: Reservation[]
  myDate = new Date();
  test!: string;
  g!:number;
  m!:Date;
  constructor(private reservationService: ReservationService, private datePipe: DatePipe ) { 
 // this.test += this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.test +=this.datePipe.transform(this.myDate, 'yyyy/MM/dd');
    this.test += datePipe.transform(this.myDate, 'yyyy-MM-dd HH:mm:ss')
  }


  
  ngOnInit() {
   // this.g = this.myDate.toLocaleString()
    this.g = this.myDate.getFullYear()
   // this.m =this.myDate.toLocaleDateString()
    this.mybooking()
   
  }

  mybooking(){
    
    this.reservationService.mybook().subscribe(
      data => {this.myres=data;
      this.myres=  this.myres.filter(res => new Date(res.checkout) < this.myDate)
        this.myrescheckout = this.myres.filter(res => new Date(res.checkout) > this.myDate)
      }
      
    )
  }

}
