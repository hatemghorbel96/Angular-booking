import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Coupon } from '../model/coupon';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  
};
@Injectable({
  providedIn: 'root'
})
export class CouponService {
  apiURL: string = 'http://localhost:8080/booking/coupon';
  host :string = "http://localhost:8080";
  constructor(private http : HttpClient,private authService : AuthService) { }


  addCoupon( c: Coupon):Observable<Coupon>{
    
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Coupon>(this.apiURL,c, {headers:httpHeaders});
    }

      getallCoupons(): Observable<Coupon[]>{ 
      
       return this.http.get<Coupon[]>(this.apiURL+"/all",httpOptions);
       
       }

       

       getbyid(id:number): Observable<Coupon>{ 
        const url = `${this.apiURL}/getbyid/${id}`;
        return this.http.get<Coupon>(url,httpOptions);
        
        }

        check(code:string): Observable<Coupon>{ 
          const url = `${this.apiURL}/checkcoupon/${code}`;
          return this.http.get<Coupon>(url,httpOptions);
          
          }
}
