import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';
import { envionment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  urlEndPoint: string = envionment.urlApi;
  private selectedCategoryId = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient
   ) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.urlEndPoint+'/categoria');
  }

  getCategoryId(id: string): Observable<ICategory | null> {
    return this.http.get<ICategory>(`${this.urlEndPoint}/producto/categorias/${id}`);
  }

  enviarCategoriaId(id: string): void {
    this.selectedCategoryId.next(id);
  }

  obtenerCategoriaId(){
    return this.selectedCategoryId.asObservable();
  }

}
