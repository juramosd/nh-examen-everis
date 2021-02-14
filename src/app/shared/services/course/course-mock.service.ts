import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/course';
import { coursesMock } from '../../mocks/courses.mock';

@Injectable({
  providedIn: 'root'
})
export class CourseMockService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return new Observable(
      observer => {
        observer.next(coursesMock);
      }
    );
  }

  getFeaturedCourses(): Observable<Course[]> {
    return new Observable(
      observer => {
        const courses: Course[] = coursesMock.filter(f => f.featured === true);
        observer.next(courses);
      }
    );
  }

  getCourse(id: number): Observable<Course> {
    return new Observable(
      observer => {
        const course: Course = coursesMock.find(f => f.id === id);
        observer.next(course);
      }
    );
  }

  getCourseporCategoria(id: number): Observable<Course[]> {
    return new Observable(
      observer => {
        const courses: Course[] = coursesMock.filter(f => f.category === id);
        observer.next(courses);
      }
    );
  }
}
