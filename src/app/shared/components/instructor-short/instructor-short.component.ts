import { Component, Input, OnInit } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';

@Component({
  selector: 'app-instructor-short',
  templateUrl: './instructor-short.component.html',
  styleUrls: ['./instructor-short.component.scss']
})
export class InstructorShortComponent implements OnInit {

  @Input() instructor: Instructor;
  constructor() { }

  ngOnInit(): void {
  }

}
