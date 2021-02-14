import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContacService {

  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  save(email: Contact): Observable<Contact> {    
    console.log("form: " +JSON.stringify(email));
    return this.http.post<Contact>(`${this.apiUrl}/contacts/`, email)
    .pipe( map(res => {
      return res;}));
  }
}
