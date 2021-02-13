import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user.interface';
import { ModifiedDate } from '../interfaces/modified-dates.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://localhost/users-api-app/public/api';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    const url: string = `${this.apiUrl}/users`;
    return this.http.get<User[]>(url);
  }

  public findUser(id: number): Observable<User> {
    const url: string = `${this.apiUrl}/users/${id}`;
    return this.http.get<User>(url);
  }

  public createUser(user: User): Observable<User> {
    const url: string = `${this.apiUrl}/users/create`;
    return this.http.post<User>(url, user);
  }

  public editUser(id: number, user: User): Observable<User> {
    const url: string = `${this.apiUrl}/users`;
    const params = new HttpParams().set('', id.toString());
    return this.http.put<User>(url, user, { params });
  }

  public deleteUser(id: number): Observable<User> {
    const url: string = `${this.apiUrl}/users/delete/${id}`;
    return this.http.delete<User>(url);
  }

  public getModifiedDates(): Observable<ModifiedDate> {
    const url: string = `${this.apiUrl}/get-modified-dates`;
    return this.http.get<ModifiedDate>(url);
  }
  
}
