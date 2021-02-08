import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-course-categoria',
  templateUrl: './course-categoria.component.html',
  styleUrls: ['./course-categoria.component.scss']
})
export class CourseCategoriaComponent implements OnInit {

  categoryas: Category[];
  constructor() { }

  ngOnInit(): void {
  }

}
