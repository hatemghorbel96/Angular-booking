import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vol } from '../model/vol';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  
};
@Injectable({
  providedIn: 'root'
})
export class VolService {
  apiURL: string = 'http://localhost:8080/booking/vol';
  host :string = "http://localhost:8080";
  constructor(private http : HttpClient,private authService : AuthService) { }
  ajouterVol( s: FormData){
    
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Vol>(this.apiURL, s, {headers:httpHeaders});
    }


    getAllVol():Observable<Vol[]>{
      
      return this.http.get<Vol[]>(this.apiURL+"/all",httpOptions);
      }


      getVol(id:number):Observable<Vol>{
        
        const url = `${this.apiURL}/getVol/${id}`;

        return this.http.get<Vol>(url,httpOptions);
        }

        getVolbydate(t:Date):Observable<Vol[]>{
        
        const url = `${this.apiURL}/date/${t}`;
  
        return this.http.get<Vol[]>(url,httpOptions);

       }

  searchByPrix(max: string, min: string): Observable<Vol[]> {


    const searchUrl = `${this.apiURL}/VolsByPrix/${max}/${min}`;

    return this.http.get<Vol[]>(searchUrl, httpOptions);
  }

       

}

