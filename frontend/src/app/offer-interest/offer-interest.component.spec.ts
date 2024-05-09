import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferInterestComponent } from './offer-interest.component';

describe('OfferInterestComponent', () => {
  let component: OfferInterestComponent;
  let fixture: ComponentFixture<OfferInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferInterestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
