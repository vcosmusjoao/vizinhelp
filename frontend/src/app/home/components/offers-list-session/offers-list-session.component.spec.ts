import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListSessionComponent } from './offers-list-session.component';

describe('OffersListSessionComponent', () => {
  let component: OffersListSessionComponent;
  let fixture: ComponentFixture<OffersListSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffersListSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffersListSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
