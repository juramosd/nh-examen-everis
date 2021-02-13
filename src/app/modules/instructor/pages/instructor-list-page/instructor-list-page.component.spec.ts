import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorListPageComponent } from './instructor-list-page.component';

describe('InstructorListPageComponent', () => {
  let component: InstructorListPageComponent;
  let fixture: ComponentFixture<InstructorListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
