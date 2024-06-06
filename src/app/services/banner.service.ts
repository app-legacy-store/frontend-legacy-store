import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envionment } from 'src/environments/environments';
import { IBanner } from '../interfaces/banner.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  urlApi: string = envionment.urlApi;
  urlImage: string = envionment.urlApiImage;
  banners: IBanner[];

  constructor(
    private http: HttpClient
  ) { }

  getBanners(): Observable<IBanner[]> {
    return this.http.get<IBanner[]>(`${this.urlApi}/banner/allBanners`)
  }

}
