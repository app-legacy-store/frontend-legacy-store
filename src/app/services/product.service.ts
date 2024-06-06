import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { envionment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlEndPoint: string = envionment.urlApi;

  constructor(
    private http: HttpClient
   ) { }

  getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.urlEndPoint + '/producto');
  }

  getPruductId(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.urlEndPoint}/producto/${id}`)
  }
}
