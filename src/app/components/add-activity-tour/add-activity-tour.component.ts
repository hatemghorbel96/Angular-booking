import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Activity } from 'src/app/model/activity';
import { Hotel } from 'src/app/model/hotel';
import { Tour } from 'src/app/model/tour';
import { ActivityService } from 'src/app/services/activity.service';
import { AirlineService } from 'src/app/services/airline.service';
import { HotelService } from 'src/app/services/hotel.service';
import { ImageProsTourService } from 'src/app/services/image-pros-tour.service';
import { ImageProsService } from 'src/app/services/image-pros.service';
import { TourService } from 'src/app/services/tour.service';
@Component({
  selector: 'app-add-activity-tour',
  templateUrl: './add-activity-tour.component.html',
  styleUrls: ['./add-activity-tour.component.css']
})
export class AddActivityTourComponent implements OnInit {
  tour!:Tour;
  hotel!:Hotel;
  hotels!:Hotel[];
  selectedProductIndex = 0;

  newActivity = new Activity();
  newIdtour! : number;
  tours!:Tour[] ;
  touridd!:number;
  acts!:Activity[] ;
  constructor(private hotelservice : HotelService,private imagePros: ImageProsService,private tourService: TourService,private imageProsTour: ImageProsTourService
    ,private route: ActivatedRoute,public airlineService :AirlineService,private activityservice: ActivityService) { }

  ngOnInit(): void {

    this.gettour();
    this.touridd = +this.route.snapshot.paramMap.get('id')!;
    this.hotelservice.getallhotels().pipe(
      map((x:Hotel[],i)=> x.map((hotel:Hotel)=> this.imagePros.createImage(hotel)))
      ).subscribe(
      data => {this.hotels=data;}
    )

    const tourid: number = +this.route.snapshot.paramMap.get('id')!;

    this.tourService.getbyid(tourid).pipe(
      map((tour:Tour)=> this.imageProsTour.createImage(tour))
      ).subscribe(
      data => {
        this.tour = data;
     
       
      }
    )

    this.tourService.getalltours().pipe(
      map((x:Tour[],i)=> x.map((tour:Tour)=> this.imageProsTour.createImage(tour)))
      ).subscribe(
      data => {this.tours=data;}
    )
  
  }

  addAct(){
     this.touridd = +this.route.snapshot.paramMap.get('id')!; 
     console.log("id tour",this.touridd) 
   
    this.activityservice.ajouteractivity(this.newActivity,this.touridd).subscribe(
      act => {console.log("act",act);
      console.log("id tour",this.touridd) 
      this.gettour();
        
    });
    }

    gettour(){
      const tourid: number = +this.route.snapshot.paramMap.get('id')!;

    this.activityservice.getbytourId(tourid).subscribe(
      data => {
        this.acts = data;
     
       
      }
    )
    }

  

 
}