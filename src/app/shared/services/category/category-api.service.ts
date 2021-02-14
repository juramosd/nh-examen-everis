import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  apiUrl: string = environment.apiUrl;
  
  constructor(
    private http: HttpClient
  ) { }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/course/category`);  
  }
}
