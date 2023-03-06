import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Tour } from 'src/app/model/tour';
import { ImageProsTourService } from 'src/app/services/image-pros-tour.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-tour-details-private',
  templateUrl: './tour-details-private.component.html',
  styleUrls: ['./tour-details-private.component.css']
})
export class TourDetailsPrivateComponent implements OnInit {
  tour!:Tour;
  
  selectedProductIndex = 0;
  constructor(private tourService: TourService,private imageProsTour: ImageProsTourService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tourdetails()
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

}
