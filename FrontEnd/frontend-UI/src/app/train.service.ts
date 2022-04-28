import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from './train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  private baseURL1 = "http://localhost:8083/api/traininfo";

  private baseURL2 = "http://localhost:8081/api/traininfo";

  private baseURL3 = "http://localhost:8081/api/addTrains";

//  private baseURL1 = "http://localhost:9090/TRAIN-SEARCH-SERVICE/api/traininfo";

  constructor(private httpClient:HttpClient) { }

  getTrainSearchList(): Observable<Train[]> {
    return this.httpClient.get<Train[]>(`${this.baseURL1}`);
  }

  getTrainList(): Observable<Train[]> {
    return this.httpClient.get<Train[]>(`${this.baseURL2}`);
  }

  addTrain(train: Train): Observable<Object>{
    return this.httpClient.post(`${this.baseURL3}`,train);
   }
 
   getTrainById(trainId: number): Observable<Train> {
     return this.httpClient.get<Train>(`${this.baseURL2}/${trainId}`);
   }
 
   updateTrain(trainId:number, train: Train): Observable<Object> {
     return this.httpClient.put(`${this.baseURL2}/${trainId}`, train);
   }
 
   deleteTrain(trainId:number): Observable<Object> {
     return this.httpClient.delete(`${this.baseURL2}/${trainId}`);
   }

}
