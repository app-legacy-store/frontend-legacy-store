import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { envionment } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {

  private _isLoggedIn = new BehaviorSubject<boolean>(true);
  isLoggedIn$ = this._isLoggedIn.asObservable();
   private urlEndPoint: string = envionment.urlApi;
   private loggedInUser: undefined;

   constructor(private http: HttpClient) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this._isLoggedIn.next(isLoggedIn === 'true');
    }
  }
   
  private HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(
      this.urlEndPoint + '/auth/register',
      user,
      { headers: this.HttpHeaders }
    );
  }

  getUserId(id: string): Observable<User> {
   return this.http.get<User>(`${this.urlEndPoint}/auth/user/${id}`);
 }

   login( credentials: { email: string, password: string } ): Observable<{ token: string, id: string }> {
      return this.http.post<{ token: string, id: string }>(`${this.urlEndPoint}/auth/login`, credentials)
      .pipe(
         tap(response => {
           localStorage.setItem('token', response.token);
           localStorage.setItem('userId', response.id);
           location.reload();
         })
       );
     }
    
  setLoggedIn(value: boolean) {
    this._isLoggedIn.next(value);
    localStorage.setItem('isLoggedIn', value.toString());
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    this.loggedInUser = undefined;
    localStorage.clear();
  }

  getIdUser(key: string): string {
    return localStorage.getItem(key); 
  }
}