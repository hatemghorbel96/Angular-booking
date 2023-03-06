import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/model/airline';
import { AirlineService } from 'src/app/services/airline.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
 
})
export class AddAirlineComponent implements OnInit {
  imgURL: any;
  public imagePath;

  newAirline =  new Airline();
  constructor(private airlineService: AirlineService) { }

  ngOnInit(): void {
  }

  addairline(){

    
    let formData = new FormData();
       formData.append('nomAirline',this.newAirline.nomAirline);
       formData.append('img',this.img);
       
       this.airlineService.ajouterAirline(formData).subscribe(
         s => {console.log(s); 
       });
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
