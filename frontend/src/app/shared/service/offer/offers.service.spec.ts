import { TestBed } from '@angular/core/testing';

import { OfferService } from './offer.service';

describe('OffersService', () => {
  let service: OfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
