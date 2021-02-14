import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { data } from '../models/suscription.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuscribeService {

  email2: string;
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  save(email: data): Observable<data> {
    return this.http.post<data>(`${this.apiUrl}/contacts/news/`, email)
    .pipe( map(res => {
      return res;}));
    
  }
}
