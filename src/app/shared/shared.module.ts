import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseShortComponent } from './components/course-short/course-short.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';
import { CourseCategoriaComponent } from './components/course-categoria/course-categoria.component';
import { InstructorShortComponent } from './components/instructor-short/instructor-short.component';



@NgModule({
  declarations: [
    CourseShortComponent,
    CourseListComponent,
    InstructorListComponent,
    CourseCategoriaComponent,
    InstructorShortComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CourseListComponent,
    InstructorListComponent,
    CourseCategoriaComponent
  ]
})
export class SharedModule { }
