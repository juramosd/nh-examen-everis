import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseApiService {

  apiUrl: string = environment.apiUrl;
  
  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/course/`);
  }

  getFeaturedCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/course/?featured=true`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/course/${id}/`);
  }

  getCourseporCategoria(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/course/?category=${id}`);

  }
}
