import { TestBed } from '@angular/core/testing';

import { NullcheckerService } from './nullchecker.service';

describe('NullcheckerService', () => {
  let service: NullcheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NullcheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
