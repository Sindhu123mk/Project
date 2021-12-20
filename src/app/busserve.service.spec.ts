import { TestBed } from '@angular/core/testing';

import { BusserveService } from './busserve.service';

describe('BusserveService', () => {
  let service: BusserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
