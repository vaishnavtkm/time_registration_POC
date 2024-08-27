import { TestBed } from '@angular/core/testing';

import { DropdownServiceService } from './dropdown-service.service';

describe('DropdownServiceService', () => {
  let service: DropdownServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
