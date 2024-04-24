import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferUserListComponent } from './offer-user-list.component';

describe('OfferUserListComponent', () => {
  let component: OfferUserListComponent;
  let fixture: ComponentFixture<OfferUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferUserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
