import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Tour } from 'src/app/model/tour';
import { ImageProsTourService } from 'src/app/services/image-pros-tour.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.css']
})
export class ListTourComponent implements OnInit {
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
