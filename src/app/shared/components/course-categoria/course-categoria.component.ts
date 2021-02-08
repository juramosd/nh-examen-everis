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
  }

}
