import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  @Input() courseId: number;
  course: Course;
  constructor() { }

  ngOnInit(): void {
    this.fetchBook();
  }

  fetchBook(){
    this.course = 
      {
        "id": 1,
        "name": "Angular 10",
        "featured": true,
        "image": "http://examen-nh.jcramireztello.com/media/books/angular10.png",
        "language": "es",
        "price": 5000.0,
        "duration": 40,
        "lessons": 7,
        "deadline": "2021-01-09",
        "students": 20,
        "summary": "Angular es el framework para JavaScript estándar para crear webs SPA. Es uno de los frameworks más populares para desarrollar aplicaciones modernas y escalables en el lado del cliente.\r\nSi quieres ser desarrollador web, o incluso si ya te dedicas al desarrollo web, es casi obligatorio aprender todos los frameworks y tecnologías con las que vamos a trabajar en el curso y sobre todo como combinarlas para crear aplicaciones completas a medida.\r\nAngular versión 10 ha dado un salto de calidad con respecto a las versiones anteriores del framework, como AngularJS. Ahora utilizaremos TypeScript para definir nuestras clases, propiedades y métodos, el código es mucho más limpio y se ha mejorado el funcionamiento general del framework.",
        "instructor": 1,
        "category": 2
      };

  }

}
