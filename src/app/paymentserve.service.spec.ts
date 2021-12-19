import { TestBed } from '@angular/core/testing';

import { PaymentserveService } from './paymentserve.service';

describe('PaymentserveService', () => {
  let service: PaymentserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
