import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Replay } from '../model/replay';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  
};
@Injectable({
  providedIn: 'root'
})
export class ReplayService {
  apiURL: string = 'http://localhost:8080/booking/replay';
  constructor(private http : HttpClient,private authService : AuthService) { }

  addreplay( r: Replay,id:number){
    
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.apiURL}/addreplay/${id}`;
    return this.http.post<Replay>(url, r,httpOptions);
    }
}
