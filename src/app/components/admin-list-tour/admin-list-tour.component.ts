import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Activity } from 'src/app/model/activity';
import { Tour } from 'src/app/model/tour';
import { ActivityService } from 'src/app/services/activity.service';
import { ImageProsTourService } from 'src/app/services/image-pros-tour.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-admin-list-tour',
  templateUrl: './admin-list-tour.component.html',
  styleUrls: ['./admin-list-tour.component.css']
})
export class AdminListTourComponent implements OnInit {
  tours!:Tour[] ;
  newActivity = new Activity();
  newIdtour! : number;
  constructor(private tourService: TourService,private imageProsTour: ImageProsTourService,private activityservice: ActivityService) { }

  ngOnInit(): void {
    this.tourService.getalltours().pipe(
      map((x:Tour[],i)=> x.map((tour:Tour)=> this.imageProsTour.createImage(tour)))
      ).subscribe(
      data => {this.tours=data;}
    )
  }


 



}
