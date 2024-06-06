import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envionment } from 'src/environments/environments';
import { IDireccion } from '../auth/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  urlApilocal = envionment.urlApi

  constructor(
    private http: HttpClient
  ) { }

  getListAddressUser(userId: string): Observable<IDireccion[]> {
    return this.http.get<IDireccion[]> (`${this.urlApilocal}/direccion/usuario/${userId}`);
  }

  postAdressUser(data: any) {
    return this.http.post(`${this.urlApilocal}/direccion`, data);
  }

}
