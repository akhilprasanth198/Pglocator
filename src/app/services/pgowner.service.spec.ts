import { TestBed } from '@angular/core/testing';

import { PgownerService } from './pgowner.service';

describe('PgownerService', () => {
  let service: PgownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgownerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
