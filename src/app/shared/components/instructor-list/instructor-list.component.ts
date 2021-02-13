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
    this.instructores = this.fetchCurse();
  }

  fetchCurse(): Instructor[] {   
    const instructores : Instructor[] = 
      [{
        "id": 1,
        "name": "Jose Carlos",
        "lastName": "Ramirez Tello",
        "educationTitle": "Frontend Teacher",
        "image": "http://examen-nh.jcramireztello.com/media/instructor/04.jpg"
    },
    {
        "id": 2,
        "name": "Ebed",
        "lastName": "Guerra",
        "educationTitle": "Desing Teacher",
        "image": "http://examen-nh.jcramireztello.com/media/instructor/01.jpg"
    }
    ];

    return instructores;
  }


}
