import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  @Input() courseId: number;
  courses: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
