import { TestBed } from '@angular/core/testing';

import { BookingserveService } from './bookingserve.service';

describe('BookingserveService', () => {
  let service: BookingserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
