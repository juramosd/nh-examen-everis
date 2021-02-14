import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoryMockService } from '../../services/category-mock.service';

@Component({
  selector: 'app-course-categoria',
  templateUrl: './course-categoria.component.html',
  styleUrls: ['./course-categoria.component.scss']
})
export class CourseCategoriaComponent implements OnInit {

  categorys: Category[];

  constructor(
    private categoryService: CategoryMockService,
  ) { }

  ngOnInit(): void {
    this.fetchCurse();
  }

  fetchCurse(): void {
    this.categoryService.getCategorys().subscribe(categorys => this.categorys = categorys);
  }

}
