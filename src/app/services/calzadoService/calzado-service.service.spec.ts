import { TestBed } from '@angular/core/testing';

import { CalzadoServiceService } from './calzado-service.service';

describe('CalzadoServiceService', () => {
  let service: CalzadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalzadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
