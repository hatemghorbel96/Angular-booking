import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airline } from '../model/airline';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  
};
@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  apiURL: string = 'http://localhost:8080/booking/airline';
  host :string = "http://localhost:8080";
  constructor(private http : HttpClient,private authService : AuthService) { }

  ajouterAirline( s: FormData){
    
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Airline>(this.apiURL, s, {headers:httpHeaders});
    }


    getAllAirline(){
      

      return this.http.get<Airline[]>(this.apiURL+"/all",httpOptions);
      }


      getAirline(id:number){
        
        const url = `${this.apiURL}/getAirline/${id}`;

        return this.http.get<Airline>(url,httpOptions);
        }

}
