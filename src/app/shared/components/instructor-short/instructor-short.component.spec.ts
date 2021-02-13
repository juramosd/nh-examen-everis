import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorShortComponent } from './instructor-short.component';

describe('InstructorShortComponent', () => {
  let component: InstructorShortComponent;
  let fixture: ComponentFixture<InstructorShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
