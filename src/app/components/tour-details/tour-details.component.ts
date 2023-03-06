import { Component, OnInit,Input } from '@angular/core';
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
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
 
  tour!:Tour;
  hotel!:Hotel;
  hotels!:Hotel[];
  selectedProductIndex = 0;
  acts!:Activity[] ;
  nbchabre!:any;
  constructor(private hotelservice : HotelService,private imagePros: ImageProsService,private tourService: TourService,private imageProsTour: ImageProsTourService,
    private route: ActivatedRoute,public airlineService :AirlineService,private activityservice: ActivityService) { }

  ngOnInit(): void {
    this.gettour();
    this.tourdetails();
    this.hotelservice.getallhotels().pipe(
      map((x:Hotel[],i)=> x.map((hotel:Hotel)=> this.imagePros.createImage(hotel)))
      ).subscribe(
      data => {this.hotels=data;}
    )

    this.nbchabre  = localStorage.getItem('nb-chambre')
    if(this.nbchabre === null){
      localStorage.setItem('nb-chambre','1')
    }

    
  
    
  }

 

  one(){
    localStorage.setItem('nb-chambre','1');
    this.new();
  }

  two(){
    localStorage.setItem('nb-chambre','2');
    this.new();
  }

  new(){
    this.nbchabre= localStorage.getItem('nb-chambre')
    console.log("car",this.nbchabre);
  }

  tourdetails(){
   
    const hotelid: number = +this.route.snapshot.paramMap.get('id')!;

    this.tourService.getbyid(hotelid).pipe(
      map((tour:Tour)=> this.imageProsTour.createImage(tour))
      ).subscribe(
      data => {
        this.tour = data;
      }
    )
  }

  

  changeindex(index){
    this.selectedProductIndex= index;
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
