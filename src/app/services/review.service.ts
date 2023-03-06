import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../model/review';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  apiURL: string = 'http://localhost:8080/booking/review';
  constructor(private http : HttpClient) { }

  addReview(com: Review,id:number,username: string):Observable<Review>{
  
   const url = `${this.apiURL}/add/${id}/${username}`;
 
   return this.http.post<Review>(url,com,httpOptions);
   }

   updateReview(com: Review,id:number):Observable<Review>{
   
     const url = `${this.apiURL}/update/${id}`;
   
     return this.http.put<Review>(url,com,httpOptions);
     }

     getall(): Observable<Review[]> {
  
      const url = `${this.apiURL}/allrev`;
     
      return this.http.get<Review[]>(url,httpOptions);
      }

   consulterReviews(id: number): Observable<Review[]> {
  
    const url = `${this.apiURL}/${id}`;
   
    return this.http.get<Review[]>(url,httpOptions);
    }

    getReviewbyid(id: number): Observable<Review> {
    
      const url = `${this.apiURL}/get/${id}`;
     
      return this.http.get<Review>(url,httpOptions);
      }

      supprimerReview(id : number) {
      
         const url = `${this.apiURL}/delete/${id}`;
     
         return this.http.delete(url,httpOptions);
      }
}
