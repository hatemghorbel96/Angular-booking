import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../model/activity';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  
};
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  apiURL: string = 'http://localhost:8080/booking/activity';
  host :string = "http://localhost:8080";
  constructor(private http : HttpClient,private authService : AuthService) { }

  ajouteractivity(a: Activity,id:number):Observable<Activity>{
    
    const url = `${this.apiURL}/${id}`;

    return this.http.post<Activity>(url, a);

    }


    getAllactivitys():Observable<Activity[]>{
      
      return this.http.get<Activity[]>(this.apiURL+"/all",httpOptions);
     
    }


      getactivity(id:number):Observable<Activity>{
        
        const url = `${this.apiURL}/getactivity/${id}`;

        return this.http.get<Activity>(url,httpOptions);
        }

        getbytourId(id:number):Observable<Activity[]>{
        
          const url = `${this.apiURL}/actTourId/${id}`;
  
          return this.http.get<Activity[]>(url,httpOptions);
          }
}
