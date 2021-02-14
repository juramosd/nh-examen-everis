import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instructor } from '../../interfaces/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorApiService {

  apiUrl: string = environment.apiUrl;
  
  constructor(
    private http: HttpClient
  ) { }

  getCategorys(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(`${this.apiUrl}/instructor`);  
  }
}
