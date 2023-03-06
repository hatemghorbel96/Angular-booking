import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Coupon } from 'src/app/model/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.css']
})
export class ListCouponComponent implements OnInit {
   coupons! : Coupon[];
  constructor(private couponService: CouponService) { }

  ngOnInit(): void {
    this.listcoupons();
  }

  listcoupons(){
    this.couponService.getallCoupons().subscribe 
            (cops => {console.log(cops); 
            this.coupons = cops;
            }); 
           
  }

}
