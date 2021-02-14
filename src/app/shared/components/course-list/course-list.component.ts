import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CourseMockService } from '../../services/course-mock.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() isFeatured: boolean = false;
  @Input() showCourses;
  @Input() categoryId: number = 0;
  title: string;
  courses: Course[];
  //classShowCourse: number;
  constructor(
    private courseService: CourseMockService,
  ) { }

  ngOnInit(): void {
    this.fetchCurses();
   // this.classShowCourse = 12 / this.showCourses;
  }

  fetchCurses(): void {
    this.title = this.isFeatured ? "Available Courses" : "Our Cursos";
    this.isFeatured ? this.courseService.getFeaturedCourses().subscribe(courses => this.courses=courses) : this.courseService.getCourses().subscribe(courses => this.courses=courses);
  }
}
