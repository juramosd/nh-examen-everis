import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent implements OnInit {

  @Input() courseId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
