import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';
import { InstructorMockService } from '../../services/instructor-mock.service';
import { InstructorApiService } from '../../services/instructor/instructor-api.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {

  instructores: Instructor[];
  constructor(
    private instructorService: InstructorApiService
  ) { }

  ngOnInit(): void {
    this.fetchInstructors();
  }

  fetchInstructors(): void {
    this.instructorService.getCategorys().subscribe(instructors => this.instructores = instructors);
  }
}
