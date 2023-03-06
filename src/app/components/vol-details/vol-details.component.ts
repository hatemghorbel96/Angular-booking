import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { Vol } from 'src/app/model/vol';
import { AirlineService } from 'src/app/services/airline.service';
import { AuthService } from 'src/app/services/auth.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { VolService } from 'src/app/services/vol.service';



@Component({
  selector: 'app-vol-details',
  templateUrl: './vol-details.component.html',
  styleUrls: ['./vol-details.component.css']
})
export class VolDetailsComponent implements OnInit {
  vol!: Vol;
  
  constructor(private route: ActivatedRoute,private volService: VolService,public airlineService: AirlineService,private reservationService: ReservationService
    ,public authService : AuthService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.voldetails();
    })
  }

  voldetails(){
   
    const volid: number = +this.route.snapshot.paramMap.get('id')!;

    this.volService.getVol(volid).subscribe(
      data => {
        this.vol = data;
      }
    )
  }

  annulerRes(r: number){
         
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.reservationService.annulereservation(r).subscribe(() => {
    console.log("reservation annuler");
    this.voldetails(); 
    });
    }

    cldate(v1:any,v2:any){
    /*   let difd = (v2 - v1);
      let difday = Math.floor(diffMs / 86400000); 
      let difh = Math.floor((diffMs % 86400000) / 3600000); 
      let difmin = Math.round(((diffMs % 86400000) % 3600000) / 60000); */
      let time = v2.getTime() - v1.getTime();
      console.log('time',time);
      return time
    }

}
