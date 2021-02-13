import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-course-categoria',
  templateUrl: './course-categoria.component.html',
  styleUrls: ['./course-categoria.component.scss']
})
export class CourseCategoriaComponent implements OnInit {

  categorys: Category[];

  constructor() { }

  ngOnInit(): void {
    this.categorys = this.fetchCurse();
  }

  fetchCurse(): Category[] {   
    const categorias : Category[] = 
      [
        {
            "id": 1,
            "name": "Diseño"
        },
        {
            "id": 2,
            "name": "Desarrollo"
        },
        {
            "id": 3,
            "name": "Tecnologia de informacion"
        }
    ];

    return categorias;
  }

}
