import { TestBed } from '@angular/core/testing';

import { InstructorMockService } from './instructor-mock.service';

describe('InstructorMockService', () => {
  let service: InstructorMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
