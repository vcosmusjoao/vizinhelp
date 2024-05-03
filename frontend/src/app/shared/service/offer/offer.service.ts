import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private baseUrl = 'http://localhost:3000/api/offers'; 

  constructor(private http: HttpClient) { }

  getAllOffers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getAllOffersByUserLogged(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+"/user");
  }

  getOfferDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  postOffer(offerData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, offerData);
  }

}
