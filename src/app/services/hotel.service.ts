import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  
};
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  apiURL: string = 'http://localhost:8080/booking/hotel';
  host :string = "http://localhost:8080";
  constructor(private http : HttpClient,private authService : AuthService) { }


  addhotel( s: FormData){
    
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Hotel>(this.apiURL, s, {headers:httpHeaders});
    }

      getallhotels(): Observable<Hotel[]>{ 
      
       return this.http.get<Hotel[]>(this.apiURL+"/all",httpOptions);
       
       }

       getbyid(id:number): Observable<Hotel>{ 
        const url = `${this.apiURL}/getbyid/${id}`;
        return this.http.get<Hotel>(url,httpOptions);
        
        }

     
       
}
