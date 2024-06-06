import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envionment } from 'src/environments/environments';
import { ITarjeta } from '../interfaces/tarjeta.interface';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  urlBaseApi: string = envionment.urlApi;

  constructor(
    private http: HttpClient
  ) { }


  getTarjetasUsuario(idUsuario: string): Observable<ITarjeta[]> {
    return this.http.get<ITarjeta[]>(`${this.urlBaseApi}/tarjeta/buscar-tarjetas-usuario/${idUsuario}`);
  }


}
