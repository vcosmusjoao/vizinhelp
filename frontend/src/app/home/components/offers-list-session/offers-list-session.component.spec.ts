import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListSessionComponent } from './offers-list-session.component';
import { HttpClientModule } from '@angular/common/http';

describe('OffersListSessionComponent', () => {
  let component: OffersListSessionComponent;
  let fixture: ComponentFixture<OffersListSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffersListSessionComponent],
      imports: [HttpClientModule]

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
