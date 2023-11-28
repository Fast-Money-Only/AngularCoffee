import { TestBed } from '@angular/core/testing';

import { CoffeePlaceServiceService } from './coffee-place-service.service';

describe('CoffeePlaceServiceService', () => {
  let service: CoffeePlaceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeePlaceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
