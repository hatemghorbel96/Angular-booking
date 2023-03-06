import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel';
import { Reservation } from '../model/reservation';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  
};
@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  apiURL: string = 'http://localhost:8080/booking/stat';
  host :string = "http://localhost:8080";
  constructor(private http : HttpClient,private authService : AuthService) { }

  getallhotels(): Observable<Hotel[]>{ 
      
    return this.http.get<Hotel[]>(this.apiURL+"/allHotels",httpOptions);
    
    }

    getallReservations(): Observable<Reservation[]>{ 
      
      return this.http.get<Reservation[]>(this.apiURL+"/allReservations",httpOptions);
      
      }

      sumRes(): Observable<number>{ 
      
        return this.http.get<number>(this.apiURL+"/totalmoneyRes",httpOptions);
        
        }
}
