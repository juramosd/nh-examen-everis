import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorListPageComponent } from './pages/instructor-list-page/instructor-list-page.component';


@NgModule({
  declarations: [InstructorListPageComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
