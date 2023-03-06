import { UUID } from 'angular2-uuid';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {


  newCoupon = new Coupon();
  
  constructor(private couponService: CouponService,private router : Router) {

    
   }

  ngOnInit(): void {
    
  }

  addnewcoupon(){
    this.newCoupon.code= UUID.UUID();
    this.couponService.addCoupon(this.newCoupon).subscribe(
      cop => {console.log(cop);
    this.router.navigate(['listcoupon']);
    });
    }

}
