import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexNonAxisChartSeries, ApexTitleSubtitle, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { map } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { Reservation } from 'src/app/model/reservation';
import { HotelService } from 'src/app/services/hotel.service';
import { ImageProsService } from 'src/app/services/image-pros.service';
import { StatistiqueService } from 'src/app/services/statistique.service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {
  @Input() series!: ApexAxisChartSeries | ApexNonAxisChartSeries;
  
  @Input() title!: ApexTitleSubtitle;
  @ViewChild("chart") chart!: ChartComponent;

  hotels!:Hotel[] ;
  reservations!:Reservation[];
  SumPayedReservation!: number;
  constructor(private hotelservice : HotelService,private imagePros: ImageProsService,private statistiqueService : StatistiqueService) { }
   

  ngOnInit(): void {
    this.statistiqueService.getallhotels().pipe(
      map((x:Hotel[],i)=> x.map((hotel:Hotel)=> this.imagePros.createImage(hotel)))
      ).subscribe(
      data => {this.hotels=data;}
    )

    this.statistiqueService.getallReservations().subscribe(
      res => {this.reservations=res;}
    )

    this.statistiqueService.sumRes().subscribe(
      sum => {this.SumPayedReservation=sum;}
    )

  }

}
