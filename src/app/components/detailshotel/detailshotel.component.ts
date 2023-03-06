import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { Review } from 'src/app/model/review';
import { AuthService } from 'src/app/services/auth.service';
import { HotelService } from 'src/app/services/hotel.service';
import { ImageProsService } from 'src/app/services/image-pros.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-detailshotel',
  templateUrl: './detailshotel.component.html',
  styleUrls: ['./detailshotel.component.css']
})
export class DetailshotelComponent implements OnInit {
  hotel!:Hotel;
  reviewFormGroup!: FormGroup;
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  newReview = new Review();
  currentReview = new Review();
  totalreviewavg:any = 0;
  nbrating:any
  test:number=2.4
  tab= new Array<number>(6);
  pourcent5!:any;
  pourcent4!:any;
  pourcent3!:any;
  pourcent2!:any;
  pourcent1!:any;
  constructor(private route: ActivatedRoute,private hotelservice:HotelService,private imagePros: ImageProsService,private reviewservice : ReviewService
    ,private authService: AuthService) { }

  ngOnInit(): void {
    this.hoteldetails();
  }

  hoteldetails(){
   
    const hotelid: number = +this.route.snapshot.paramMap.get('id')!;

    this.hotelservice.getbyid(hotelid).pipe(
      map((hotel:Hotel)=> this.imagePros.createImage(hotel))
      ).subscribe(
      data => {
        this.hotel = data;
        this.nbrating=this.hotel.reviews.length;
        for (var c of this.hotel.reviews){
          this.totalreviewavg=this.totalreviewavg+c.rating;
        }
       /*  this.totalreviewavg= Math.floor(this.totalreviewavg / this.nbrating) */
       this.totalreviewavg= Math.floor(this.totalreviewavg / this.nbrating)
       this.pourcent5=this.hotel.reviews.filter(review => Math.floor(review.rating)==5).length
       this.pourcent4=this.hotel.reviews.filter(review => Math.floor(review.rating)==4).length
       this.pourcent3=this.hotel.reviews.filter(review => Math.floor(review.rating)==3).length
       this.pourcent2=this.hotel.reviews.filter(review => Math.floor(review.rating)==2).length
       this.pourcent1=this.hotel.reviews.filter(review => Math.floor(review.rating)==1).length

      }
    ),
    this.totalreviewavg
  }

  ajreview(){
    this.isLoading.next(true);
    const hotelId: number = +this.route.snapshot.paramMap.get('id')!;

    this.reviewservice.addReview(this.newReview,hotelId,this.authService.loggedUser).subscribe(
      (data) =>{
        console.log(data);
        this.isLoading.next(false);
        this.hoteldetails();
       
      }),     
      err => {
        console.log("Error");
        this.hoteldetails();
      }       
  }


  

}
