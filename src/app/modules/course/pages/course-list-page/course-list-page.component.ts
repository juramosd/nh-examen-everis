import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.scss']
})
export class CourseListPageComponent implements OnInit {

  courses: Course[];
  constructor() { }

  ngOnInit(): void {
  }

}
