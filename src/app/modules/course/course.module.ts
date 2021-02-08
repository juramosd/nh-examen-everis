import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

@NgModule({
  declarations: [
    CourseListPageComponent,
    CourseDetailPageComponent,
    CourseDetailComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
  ]
})
export class CourseModule { }
