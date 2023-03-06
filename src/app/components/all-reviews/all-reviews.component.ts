import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { Hotel } from 'src/app/model/hotel';
import { Review } from 'src/app/model/review';
import { HotelService } from 'src/app/services/hotel.service';
import { ImageProsService } from 'src/app/services/image-pros.service';
import { ReplayService } from 'src/app/services/replay.service';
import { ReviewService } from 'src/app/services/review.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-all-reviews',
  
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  reviews!:Review[];
  totalreviewavg:any=0;
  tab= new Array<number>(6);
  pourcent5!:any;
  pourcent4!:any;
  pourcent3!:any;
  pourcent2!:any;
  pourcent1!:any;
  hotel!:Hotel;
  value:any=1;
  replayFormGroup!: FormGroup;
  constructor(private socket: SocketService,private fb:FormBuilder,private reviewservice : ReviewService,
    private hotelservice:HotelService,private imagePros: ImageProsService,private replayserv:ReplayService) {
      this.getreviews();
     }
  public isCollapsed = false;
  ngOnInit(): void {
    this.socket.subscribe('/topic/new', (): void => {
      this.getreviews();
      
    });
    
    this.gethoteldetails(this.value);
    this.replayFormGroup = this.fb.group({
      content: this.fb.control(null,[Validators.required]), 
      
      
    })
  
  }


  getreviews(){
    this.reviewservice.getall().subscribe(
      (res) => { this.reviews = (res);
        for (var c of this.reviews){
          this.totalreviewavg=this.totalreviewavg+c.rating;
        }
        this.totalreviewavg= Math.floor(this.totalreviewavg / this.reviews.length)
        this.pourcent5=this.reviews.filter(review => Math.floor(review.rating)==5).length
        this.pourcent4=this.reviews.filter(review => Math.floor(review.rating)==4).length
        this.pourcent3=this.reviews.filter(review => Math.floor(review.rating)==3).length
        this.pourcent2=this.reviews.filter(review => Math.floor(review.rating)==2).length
        this.pourcent1=this.reviews.filter(review => Math.floor(review.rating)==1).length
      }),
      err => {
        console.log("Error");
       
      } 
    
  }

   gethoteldetails(idhot:number){
   
   
    
    this.hotelservice.getbyid(idhot).pipe(
      map((hotel:Hotel)=> this.imagePros.createImage(hotel))
      ).subscribe(
      data => {
        this.hotel = data;

      }
    )
  }



  addReplay(reviewid:number){
    this.isLoading.next(true);
    
    let commenta = this.replayFormGroup.value;
   
    this.replayserv.addreplay(commenta,reviewid).subscribe(
      
      (data) =>{
        console.log(data);
        
     
        this.isLoading.next(false);
        this.getreviews();
      }),     
      err => {
        console.log("Error");
        this.getreviews();
      }  ,this.replayFormGroup.reset();     
  }

}
