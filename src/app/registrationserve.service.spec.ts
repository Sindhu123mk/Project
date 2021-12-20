import { TestBed } from '@angular/core/testing';

import { RegistrationserveService } from './registrationserve.service';

describe('RegistrationserveService', () => {
  let service: RegistrationserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
