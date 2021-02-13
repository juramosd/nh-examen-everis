import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-short',
  templateUrl: './course-short.component.html',
  styleUrls: ['./course-short.component.scss']
})
export class CourseShortComponent implements OnInit {

  @Input() course: Course;
  @Input() isFeatured : boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(`isFeatured : ${this.isFeatured}`);
  }

}
