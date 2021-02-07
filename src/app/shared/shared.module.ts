import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseShortComponent } from './components/course-short/course-short.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';



@NgModule({
  declarations: [
    CourseShortComponent, 
    CourseListComponent, 
    InstructorListComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CourseListComponent, 
    InstructorListComponent
  ]
})
export class SharedModule { }
