import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-short',
  templateUrl: './course-short.component.html',
  styleUrls: ['./course-short.component.scss']
})
export class CourseShortComponent implements OnInit {

  course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
