import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseURL = "http://localhost:9955/orders/addOrder";

  private baseURL1 = "http://localhost:9955/orders";

  constructor (private httpClient: HttpClient) {}

  bookTickets(booking: Booking): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, booking ,
    {responseType: 'text'});
  }

  // getTicketsById(id: string): Observable<Booking> {
  //   return this.httpClient.get<Booking>(`${this.baseURL1}/${id}`);
  // }

  getTicketsById(id: any): Observable<any> {
    return this.httpClient.get("http://localhost:9955/orders/"+id);
  }

  getBookingList(id: any): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>("http://localhost:9955/orders/"+id);
  }

  // getTrainsbyto(trainTo:any) {
  //   return this.http.get("http://localhost:8087/train/findto/"+trainTo);
  // }



}
