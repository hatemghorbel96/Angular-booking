import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notif } from '../model/notif';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class NotifserviceService {

  apiURL: string = 'http://localhost:8080/booking/notif';
  constructor(private http : HttpClient,private authService : AuthService) { }

  getall(): Observable<Notif[]> {
  
    const url = `${this.apiURL}/allnotif`;
   
    return this.http.get<Notif[]>(url,httpOptions);
    }

    getbyusername(): Observable<Notif[]> {
  
      const url = `${this.apiURL}/getbyusername/${this.authService.loggedUser}`;
     
      return this.http.get<Notif[]>(url,httpOptions);
      }



  showed(id:number) : Observable<Notif>
   
   {
  
   const url = `${this.apiURL}/read/${id}`;
   let jwt = this.authService.getToken();
   jwt = "Bearer "+jwt;
   let httpHeaders = new HttpHeaders({"Authorization":jwt})
   return this.http.put<Notif>(url, {headers:httpHeaders});
   }
}
