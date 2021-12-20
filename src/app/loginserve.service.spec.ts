import { TestBed } from '@angular/core/testing';

import { LoginserveService } from './loginserve.service';

describe('LoginserveService', () => {
  let service: LoginserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
