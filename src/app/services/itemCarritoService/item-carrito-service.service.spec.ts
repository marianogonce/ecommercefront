import { TestBed } from '@angular/core/testing';

import { ItemCarritoServiceService } from './item-carrito-service.service';

describe('ItemCarritoServiceService', () => {
  let service: ItemCarritoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCarritoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
