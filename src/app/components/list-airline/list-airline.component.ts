import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airline } from 'src/app/model/airline';
import { AirlineService } from 'src/app/services/airline.service';

@Component({
  selector: 'app-list-airline',
  templateUrl: './list-airline.component.html',
 
})
export class ListAirlineComponent implements OnInit {
  airlines: Airline[] = [];

  currentAirline = new Airline();
  valueid!: number;
  successSlider!: number;
  constructor(public airlineService: AirlineService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.getall()
    })
    this.airlines;
  }

  getAirline(id: number){
    
    const idcom: number = id;
    console.log(idcom)
    this.valueid= idcom;

    this.airlineService.getAirline(this.valueid).
    subscribe( com =>{ this.currentAirline = com;
    console.log(com)
      
    } ) ;
          
  }


 

       
  getall(){

    this.airlineService.getAllAirline().subscribe(
      data =>{
        this.airlines=data;
        console.log(this.airlines);
      }
      
    )
   
  }

 

}

