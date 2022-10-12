import { TestBed } from '@angular/core/testing';

import { SuscriptorServiceService } from './suscriptor-service.service';

describe('SuscriptorServiceService', () => {
  let service: SuscriptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuscriptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
