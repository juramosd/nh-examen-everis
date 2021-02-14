import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseShortComponent } from './components/course-short/course-short.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';
import { CourseCategoriaComponent } from './components/course-categoria/course-categoria.component';
import { InstructorShortComponent } from './components/instructor-short/instructor-short.component';
import { CourseMockService } from './services/course-mock.service';
import { CategoryMockService } from './services/category-mock.service';
import { InstructorMockService } from './services/instructor-mock.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CourseShortComponent,
    CourseListComponent,
    InstructorListComponent,
    CourseCategoriaComponent,
    InstructorShortComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CourseListComponent,
    InstructorListComponent,
    CourseCategoriaComponent
  ],
  providers: [
    CourseMockService,
    CategoryMockService,
    InstructorMockService,
  ]
})
export class SharedModule { }
