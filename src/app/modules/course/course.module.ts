import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CourseCategoriaComponent } from './pages/course-categoria/course-categoria.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CourseListPageComponent,
    CourseDetailPageComponent,
    CourseCategoriaComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
  ]
})
export class CourseModule { }
