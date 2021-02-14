import { TestBed } from '@angular/core/testing';

import { SuscribeService } from './suscribe.service';

describe('SuscribeService', () => {
  let service: SuscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
