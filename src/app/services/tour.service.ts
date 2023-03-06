import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from '../model/tour';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  
};
@Injectable({
  providedIn: 'root'
})
export class TourService {
  apiURL: string = 'http://localhost:8080/tour';
  host :string = "http://localhost:8080";
  constructor(private http : HttpClient,private authService : AuthService) { }


  addtour( s: FormData){
    
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Tour>(this.apiURL, s, {headers:httpHeaders});
    }

      getalltours(): Observable<Tour[]>{ 
      
       return this.http.get<Tour[]>(this.apiURL+"/all",httpOptions);
       
       }

       getbyid(id:number): Observable<Tour>{ 
        const url = `${this.apiURL}/getbyid/${id}`;
        return this.http.get<Tour>(url,httpOptions);
        
        }

     
       
}
