import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private viaCepBaseUrl = 'https://viacep.com.br/ws/';


  constructor(private http: HttpClient) { }

  getAddressByCep(cep: string): Observable<any> {
    const url = `${this.viaCepBaseUrl}${cep}/json`;
    return this.http.get<any>(url);
  }
}
