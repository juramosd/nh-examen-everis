import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CourseApiService } from '../../services/course/course-api.service';
import { CourseMockService } from '../../services/course/course-mock.service';

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
    private courseService: CourseApiService,
  ) { }

  ngOnInit(): void {
    this.fetchCurses();
   // this.classShowCourse = 12 / this.showCourses;
  }

  fetchCurses(): void {
    this.categoryId==undefined?this.categoryId=0:this.categoryId;
    this.title = this.isFeatured ? "Available Courses" : "Our Cursos";
    if(this.categoryId!=0){
      this.courseService.getCourseporCategoria(this.categoryId).subscribe(courses => this.courses=courses);  
    }
    else{
      this.isFeatured ? this.courseService.getFeaturedCourses().subscribe(courses => this.courses=courses) : this.courseService.getCourses().subscribe(courses => this.courses=courses);
    }
  }
  
  selectCategory(categoryId: number) {
    this.categoryId = categoryId;
    this.fetchCurses();
  }
}
