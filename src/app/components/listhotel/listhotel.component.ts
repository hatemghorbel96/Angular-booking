import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { ImageProsService } from 'src/app/services/image-pros.service';

@Component({
  selector: 'app-listhotel',
  templateUrl: './listhotel.component.html',
  styleUrls: ['./listhotel.component.css']
})
export class ListhotelComponent implements OnInit {
  hotels!:Hotel[] ;
  constructor(private hotelservice : HotelService,private imagePros: ImageProsService) { }

  ngOnInit(): void {
    this.hotelservice.getallhotels().pipe(
      map((x:Hotel[],i)=> x.map((hotel:Hotel)=> this.imagePros.createImage(hotel)))
      ).subscribe(
      data => {this.hotels=data;}
    )
  }

}
