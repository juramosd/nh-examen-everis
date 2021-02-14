import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { Course } from '../interfaces/course';
import { categorysMock } from '../mocks/categorys.mock';
import { coursesMock } from '../mocks/courses.mock';

@Injectable({
  providedIn: 'root'
})
export class CategoryMockService {

  constructor() { }

  getCategorys(): Observable<Category[]> {
    return new Observable(
      observer => {
        observer.next(categorysMock);
      }
    );
  }

  getCategory(id: number): Observable<Category> {
    return new Observable(
      observer => {
        const category: Category = categorysMock.find(f => f.id === id);
        observer.next(category);
      }
    );
  }
}
