import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Airline } from 'src/app/model/airline';
import { Tour } from 'src/app/model/tour';
import { Vol } from 'src/app/model/vol';
import { AirlineService } from 'src/app/services/airline.service';
import { AuthService } from 'src/app/services/auth.service';
import { ImageProsTourService } from 'src/app/services/image-pros-tour.service';
import { TourService } from 'src/app/services/tour.service';
import { VolService } from 'src/app/services/vol.service';

@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',

})
export class AddVolComponent implements OnInit {
  imgURL: any;
  public imagePath;
  newAirline! : Airline;
  newAVol =  new Vol();
  airlines! : Airline[];
  newIdAirline! : number;
  tours! : Tour[];
  newIdTour! : number;
  newTour! :Tour;
  constructor(private volService: VolService,public airlineService: AirlineService,private authService : AuthService
    ,private tourService : TourService,private imageProsTour: ImageProsTourService) { }

  ngOnInit(): void {

    this.airlineService.getAllAirline().subscribe(cats => {console.log(cats);
      this.airlines = cats;
      }
      );
      this.tourService.getalltours().pipe(
        map((x:Tour[],i)=> x.map((tour:Tour)=> this.imageProsTour.createImage(tour)))
        ).subscribe(t => {console.log(t)
          this.tours=t;
      });

  }

  addVol(){

    
    
    this.newAVol.airline = this.airlines.find(cat => cat.idairline == this.newIdAirline)!;
    this.newAVol.tour = this.tours.find(g => g.idTour == this.newIdTour)!;
    const productFormData= this.prepareFormData(this.newAVol)
      
       
       
       this.volService.ajouterVol(productFormData).subscribe(
         s => {console.log(s); 
       });
       }


    prepareFormData(newAVol : Vol):FormData{
      const formData = new FormData();
      
      formData.append(
        'vol',
        new Blob([JSON.stringify(newAVol)],{type: 'application/json'})
      );

      formData.append('img',this.img);
      

      return formData;
      
  }
   
   
    
   
   
       img:any;
   
       selectImage(event){
         
         this.img = event.target.files[0];
         console.log(this.img);
         var reader = new FileReader();
   
   
         // preview img
         this.imagePath = this.img;
         reader.readAsDataURL(this.img);
         reader.onload = (_event) => {
           this.imgURL = reader.result;
         }
       }

}

