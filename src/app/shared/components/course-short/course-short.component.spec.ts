import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseShortComponent } from './course-short.component';

describe('CourseShortComponent', () => {
  let component: CourseShortComponent;
  let fixture: ComponentFixture<CourseShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
