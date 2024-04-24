import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api/user-info'; 
  constructor(private http: HttpClient) { }

  getInfoUser(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl);
  }
  
}
