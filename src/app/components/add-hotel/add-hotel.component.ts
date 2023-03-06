import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { FileHandleHotel } from 'src/app/model/file-handle-hotel';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  newHotel =  new Hotel();
  img!:string;
  constructor(private hotelService: HotelService,private router : Router, private sanitizer : DomSanitizer) {  
  }
 
  ngOnInit(): void {
  }


  ajHotel(){

   
    const hotelFormData= this.prepareFormData(this.newHotel)

    
    this.hotelService.addhotel(hotelFormData).subscribe(
      hot => {console.log(hot); 
  
    });
    }


   

    prepareFormData(newHotel : Hotel):FormData{
        const formData = new FormData();
        
        formData.append(
          'hotel',
          new Blob([JSON.stringify(newHotel)],{type: 'application/json'})
        );

        for(var i =0; i< newHotel.hotelImages.length; i++){
          formData.append('imageFile',
          newHotel.hotelImages[i].file,
          newHotel.hotelImages[i].file.name
          );
        }

        return formData;
        
    }


   
    onFileSelected(event){
    if(event.target.files) {
      
     const file = event.target.files[0];

        const fileHandlehotel: FileHandleHotel = {
          file: file,
          url: this.sanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(file)
             )

        }

        this.img =  
          window.URL.createObjectURL(file)
           .toString();   
          this.newHotel.hotelImages.push(fileHandlehotel); 
    } 
   

    }

    removeImages(i){

      this.newHotel.hotelImages.splice(i, 1);


    }

    fileDropped(fileHandlehotel : FileHandleHotel){
      this.newHotel.hotelImages.push(fileHandlehotel);
    }

    /* changedEditor(event: EditorChangeContent | EditorChangeSelection){

    } */

}
