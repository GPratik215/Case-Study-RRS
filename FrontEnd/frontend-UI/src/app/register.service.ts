import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = "http://localhost:9091/registerNewUser";

  constructor(private httpClient: HttpClient) { }

  userRegistration(register: Register): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, register, {responseType: 'text'});
  }

}
