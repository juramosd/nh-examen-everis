import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';
import { Session } from '../interfaces/session';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  login(login: Login): Observable<Session> {
    return this.http.post<Session>(`${this.apiUrl}/auth/login/`, login);
  }
}
