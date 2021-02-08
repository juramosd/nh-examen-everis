import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {

  instructores: Instructor[];
  constructor() { }

  ngOnInit(): void {
  }

}
