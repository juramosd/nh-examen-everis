import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() isFeatured: boolean = false;
  @Input() showCourses: number = 5;
  @Input() categoryId: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
