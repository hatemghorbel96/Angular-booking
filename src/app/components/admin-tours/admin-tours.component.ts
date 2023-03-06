import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Tour } from 'src/app/model/tour';
import { ImageProsTourService } from 'src/app/services/image-pros-tour.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-admin-tours',
  templateUrl: './admin-tours.component.html',
  styleUrls: ['./admin-tours.component.css']
})
export class AdminToursComponent implements OnInit {

  tours!:Tour[] ;
  constructor(private tourService: TourService,private imageProsTour: ImageProsTourService) { }

  ngOnInit(): void {
    this.tourService.getalltours().pipe(
      map((x:Tour[],i)=> x.map((tour:Tour)=> this.imageProsTour.createImage(tour)))
      ).subscribe(
      data => {this.tours=data;}
    )
  }

}
