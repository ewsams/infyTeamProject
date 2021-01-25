import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/Users';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class Userervice {
  userUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}`);
  }
  deleteUser(user: User): Observable<User> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.delete<User>(url, httpOptions);
  }

  // Add User
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

  // Toggle Completed
  updateUser(user: User): Observable<any> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.put(url, user, httpOptions);
  }
}
