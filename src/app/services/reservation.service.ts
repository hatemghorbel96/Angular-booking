import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanceledRes } from '../model/canceled-res';
import { Reservation } from '../model/reservation';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apivol: string = 'http://localhost:8080/booking/vol';
  apires: string = 'http://localhost:8080/booking/reservation';
  host: string = "http://localhost:8080";
  constructor(private http: HttpClient, private authService: AuthService) { }

  addreservation(newReservation: Reservation, id: number, username: string): Observable<Reservation> {

    const url = `${this.apires}/add/${id}/${username}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.post<Reservation>(url, newReservation, { headers: httpHeaders });
  }

  annulereservation(id: number) {

    const url = `${this.apires}/annule/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.delete<Reservation>(url, { headers: httpHeaders });
  }

  getallCancledReservations(): Observable<CanceledRes[]> {

    return this.http.get<CanceledRes[]>(this.apires + "/getcancledRes", httpOptions);

  }

  mybook(): Observable<Reservation[]> {
    const url = `${this.apires}/mybooking/${this.authService.loggedUser}`;
    return this.http.get<Reservation[]>(url, httpOptions);

  }

          cancledtoday(): Observable<number> {

            return this.http.get<number>(this.apires + "/numbercancled", httpOptions);

          }

          checkintoday(): Observable<number> {

            return this.http.get<number>(this.apires + "/checkintoday", httpOptions);

          }

          incomingcheckin(): Observable<number> {

            return this.http.get<number>(this.apires + "/incomingcheckin", httpOptions);

          }

          checkouttoday(): Observable<number> {

            return this.http.get<number>(this.apires + "/checkouttoday", httpOptions);

          }

          checkoutoutgoing(): Observable<number> {

            return this.http.get<number>(this.apires + "/checkoutoutgoing", httpOptions);

          }

          todayres(): Observable<number> {

            return this.http.get<number>(this.apires + "/todayres", httpOptions);

          }

          dailyearning(): Observable<number> {

            return this.http.get<number>(this.apires + "/dailyearning", httpOptions);

          }

}
