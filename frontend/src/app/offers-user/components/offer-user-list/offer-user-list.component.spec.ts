import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferUserListComponent } from './offer-user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

describe('OfferUserListComponent', () => {
  let component: OfferUserListComponent;
  let fixture: ComponentFixture<OfferUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferUserListComponent],
      imports: [
        HttpClientModule, 
        MatTableModule,
      ]
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
