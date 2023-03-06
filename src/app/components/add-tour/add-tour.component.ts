import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FileHandleTour } from 'src/app/model/file-handle-tour';
import { Hotel } from 'src/app/model/hotel';
import { Tour } from 'src/app/model/tour';
import { HotelService } from 'src/app/services/hotel.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {
  newTour =  new Tour();
  img!:string;
  hotels! : Hotel[];
  newIdhotel! : number;
  constructor(private tourService: TourService,private router : Router, private sanitizer : DomSanitizer,private hotelservice : HotelService) {  
  }
 
  ngOnInit(): void {
    this.hotelservice.getallhotels().subscribe(
      data => {this.hotels=data;}
    )
  }
  


  ajtour(){

    this.newTour.hotel = this.hotels.find(cat => cat.idHotel == this.newIdhotel)!;
    const tourFormData= this.prepareFormData(this.newTour)

    
    this.tourService.addtour(tourFormData).subscribe(
      t => {console.log(t); 
  
    });
    }


   

    prepareFormData(newTour : Tour):FormData{
        const formData = new FormData();
        
        formData.append(
          'tour',
          new Blob([JSON.stringify(newTour)],{type: 'application/json'})
        );

        for(var i =0; i< newTour.tourImages.length; i++){
          formData.append('imageFile',
          newTour.tourImages[i].file,
          newTour.tourImages[i].file.name
          );
        }

        return formData;
        
    }


   
    onFileSelected(event){
    if(event.target.files) {
      
     const file = event.target.files[0];

        const fileHandletour: FileHandleTour = {
          file: file,
          url: this.sanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(file)
             )

        }

        this.img =  
          window.URL.createObjectURL(file)
           .toString();   
          this.newTour.tourImages.push(fileHandletour); 
    } 
   

    }

    removeImages(i){

      this.newTour.tourImages.splice(i, 1);


    }

    fileDropped(fileHandletour : FileHandleTour){
      this.newTour.tourImages.push(fileHandletour);
    }

}
