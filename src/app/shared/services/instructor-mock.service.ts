import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from '../interfaces/instructor';
import { instructorMock } from '../mocks/instructors.mock';

@Injectable({
  providedIn: 'root'
})
export class InstructorMockService {

  constructor() { }

  getInstructors(): Observable<Instructor[]> {
    return new Observable(
      observer => {
        observer.next(instructorMock);
      }
    );
  }

  getInstructor(id: number): Observable<Instructor> {
    return new Observable(
      observer => {
        const instructor: Instructor = instructorMock.find(f => f.id === id);
        observer.next(instructor);
      }
    );
  }

}
