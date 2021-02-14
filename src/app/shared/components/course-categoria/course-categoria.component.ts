import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoryMockService } from '../../services/category/category-mock.service';

@Component({
  selector: 'app-course-categoria',
  templateUrl: './course-categoria.component.html',
  styleUrls: ['./course-categoria.component.scss']
})
export class CourseCategoriaComponent implements OnInit {

  @Output() clickCategory: EventEmitter<number>;
  categorys: Category[];

  constructor(
    private categoryService: CategoryMockService,
  ) {
    this.clickCategory = new EventEmitter();
   }

  ngOnInit(): void {
    this.fetchCurse();
    this.onClickCategoria(0)
  }

  fetchCurse(): void {
    this.categoryService.getCategorys().subscribe(categorys => this.categorys = categorys);
  }
  
  onClickCategoria(cateogriId:number): void{    
    this.clickCategory.emit(cateogriId);
  }

}
