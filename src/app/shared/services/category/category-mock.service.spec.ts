import { TestBed } from '@angular/core/testing';

import { CategoryMockService } from './category-mock.service';

describe('CategoryMockService', () => {
  let service: CategoryMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
