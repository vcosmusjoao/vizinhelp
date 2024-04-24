import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferUserPageComponent } from './offer-user-page.component';

describe('OfferUserPageComponent', () => {
  let component: OfferUserPageComponent;
  let fixture: ComponentFixture<OfferUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferUserPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
