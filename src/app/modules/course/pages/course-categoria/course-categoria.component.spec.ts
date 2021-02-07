import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoriaComponent } from './course-categoria.component';

describe('CourseCategoriaComponent', () => {
  let component: CourseCategoriaComponent;
  let fixture: ComponentFixture<CourseCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
