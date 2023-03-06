import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { Coupon } from 'src/app/model/coupon';
import { Hotel } from 'src/app/model/hotel';
import { Reservation } from 'src/app/model/reservation';
import { Tour } from 'src/app/model/tour';
import { Vol } from 'src/app/model/vol';
import { AirlineService } from 'src/app/services/airline.service';
import { AuthService } from 'src/app/services/auth.service';
import { CouponService } from 'src/app/services/coupon.service';
import { HotelService } from 'src/app/services/hotel.service';
import { ImageProsTourService } from 'src/app/services/image-pros-tour.service';
import { ImageProsService } from 'src/app/services/image-pros.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TourService } from 'src/app/services/tour.service';
import { VolService } from 'src/app/services/vol.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  vol!: Vol;
  newReservation = new Reservation();
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();
  count=0;
  isSubmitted:boolean =false;
  carextra!:any;
  val!:number;
  couponval!:number;
  codecheck! : string;
  thiscop!:Coupon;
  clicked!:number;
  isLinear=true;
  tours!:Tour[] ;
  gg!:number;
  extraRoom!:number;
  nbchabre!:any;
  hotels!:Hotel[];
  @Output() nbpers = new EventEmitter<string>();
  
  constructor(private route: ActivatedRoute,private volService: VolService,public airlineService: AirlineService,private reservationService: ReservationService
    ,private authService : AuthService,private fb:FormBuilder,private couponService: CouponService,private imageProsTour: ImageProsTourService,private tourService: TourService
    ,private router : Router,private hotelservice : HotelService,private imagePros: ImageProsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.voldetails();

    });
    this.carextra  = localStorage.getItem('extra-car')
    if(this.carextra === null){
      localStorage.setItem('extra-car','10')
    }
    this.nbchabre  = localStorage.getItem('nb-chambre')
    if(this.nbchabre === null){
      localStorage.setItem('nb-chambre','1')
    }

    this.testcar()

   
      this.couponval=0;
    
      this.tourService.getalltours().pipe(
        map((x:Tour[],i)=> x.map((tour:Tour)=> this.imageProsTour.createImage(tour)))
        ).subscribe(
        data => {this.tours=data;},
       
      )
    
      this.hotelservice.getallhotels().pipe(
        map((x:Hotel[],i)=> x.map((hotel:Hotel)=> this.imagePros.createImage(hotel)))
        ).subscribe(
        data => {this.hotels=data;}
      )

   

  }

  testcar(){
    if(this.carextra == 1){
      this.val=10;
    }
    if(this.carextra == 3){
      this.val=0;
    }
    if(this.carextra == 2){
      this.val= -10;
    }
  }


  voldetails(){
   
    const volid: number = +this.route.snapshot.paramMap.get('id')!;

    this.volService.getVol(volid).subscribe(
      data => {
        this.vol = data;
        this.gg= this.vol.tour.hotel.pricenight;
        var extraRoomtest=+this.gg/1.5;
        this.extraRoom = Math.trunc( extraRoomtest ); // convert float to int
        console.log("gg=",this.gg);
      }
    )
  }

  one(){
    localStorage.setItem('nb-chambre','1');
    this.new();
  }

  two(){
    localStorage.setItem('nb-chambre','2');
    this.new();
  }

  new(){
    this.nbchabre= localStorage.getItem('nb-chambre')
    console.log("nb-chambre",this.nbchabre);
  }

  newcar(){
    this.carextra= localStorage.getItem('extra-car')
    console.log("car",this.carextra);
    this.testcar()
  }

  addextra(){
    localStorage.setItem('extra-car','1');
    this.newcar();
    this.testcar()
  }

  backdefault(){
    localStorage.setItem('extra-car','3');
    this.newcar();
    this.testcar()
  }

  /* annuleextra(){
    localStorage.setItem('extra-car','3');
    this.new();
  } */

  Removecar(){
    localStorage.setItem('extra-car','2');
    this.newcar();
  }



  checkcoup(value){
   
    

    this.couponService.check(value).subscribe(
      data => {
        this.thiscop = data;
        this.clicked=1;
        console.log("value coup: " + value)
        if (value==null){
          this.clicked=0;
          console.log("clicked: " + this.clicked)
        }
        if(value!=null && this.thiscop?.code == value){
          this.couponval=this.thiscop.reduction;
          console.log("valid coup: " + value)
        }

        if(this.thiscop?.code == null){
          this.couponval=0;
        }
       
       
      }
    )
  }


  myReactiveForm = new FormGroup({
    
    nb:new FormControl(null),
    nbrooms:new FormControl(this.nbchabre),
    montantExtraRoom:new FormControl(this.extraRoom),
    extra:new FormControl(this.val),
    couponon:new FormControl(this.couponval),
    persones:new FormArray([]),
    
  });

  addMember(){
    this.count++;
   
    
    if(this.count >=2){
      this.newReservation.persones.push({
        titre:'',
        firstname:'',
        lastname:'',
        datebirth:'',
        nationality:'',
        passport:0,
        country:'',
        passworddateout:'',
      })
    }

    this.members.push(this.memberAdded())
  }

  get members() :FormArray {
    return this.myReactiveForm.get('persones') as FormArray;
    
  }

  memberAdded(){
    return this.fb.group({
      titre: [''],
      firstname: [''],
      lastname:[''],
      datebirth:[''],
      nationality:[''],
      passport:[''],
      country:[''],
      passworddateout:[''],
    })
  }

  removeMember(){
    this.isSubmitted= false;
    
    this.members.removeAt(this.members.length-1);
    this.count--;
    this.newReservation.persones.splice(this.count)
  }

  addreseravrtion(form:FormGroup){
    this.isLoading.next(true);
    const volid: number = +this.route.snapshot.paramMap.get('id')!;

    this.isSubmitted = true;
    this.newReservation.nb= form.value.nb;
    this.newReservation.montantExtraRoom= form.value.montantExtraRoom;
    this.newReservation.nbrooms= form.value.nbrooms;
    this.newReservation.extra= form.value.extra;
    this.newReservation.couponon= form.value.couponon;
    for(let i=0;i< this.count;i++){
      this.newReservation.persones[i].titre=form.value.persones[i].titre;
      this.newReservation.persones[i].firstname=form.value.persones[i].firstname;
      this.newReservation.persones[i].lastname=form.value.persones[i].lastname;
      this.newReservation.persones[i].datebirth=form.value.persones[i].datebirth;
      this.newReservation.persones[i].nationality=form.value.persones[i].nationality;
      this.newReservation.persones[i].passport=form.value.persones[i].passport;
      this.newReservation.persones[i].country=form.value.persones[i].country;
      this.newReservation.persones[i].passworddateout=form.value.persones[i].passworddateout;
    }

    this.reservationService.addreservation(this.newReservation,volid,this.authService.loggedUser).subscribe(
      (data) =>{
        console.log(data);
        this.voldetails();
       
        this.isLoading.next(false);
        /* this.router.navigate(['res-success'], { queryParams: { reservation: JSON.stringify(this.newReservation) } }); */
        this.router.navigate(['res-success'], { 
          queryParams: { 
            reservation: JSON.stringify(this.newReservation),
            vol: JSON.stringify(this.vol)
          } 
        });
      }),     
      err => {
        console.log("Error");
        alert("Error");
      } 
       this.nbpers.emit(form.value.nb);

    

  }


  /* addreseravrtion(){
    this.isLoading.next(true);
    const volid: number = +this.route.snapshot.paramMap.get('id')!;

    this.reservationService.addreservation(this.newReservation,volid,this.authService.loggedUser).subscribe(
      (data) =>{
        console.log(data);
        this.voldetails();
       
        this.isLoading.next(false);
      }),     
      err => {
        console.log("Error");
      }       
  } */

  

}
