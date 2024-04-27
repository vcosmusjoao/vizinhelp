import { TestBed } from '@angular/core/testing';

import { OfferService } from './offer.service';
import { HttpClientModule } from '@angular/common/http';

describe('OffersService', () => {
  let service: OfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],

    });
    service = TestBed.inject(OfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
