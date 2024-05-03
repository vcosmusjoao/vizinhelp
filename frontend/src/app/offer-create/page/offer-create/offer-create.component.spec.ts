import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCreateComponent } from './offer-create.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { HeaderInfoComponent } from '../../../shared/component/header-info/header-info/header-info.component';

describe('OfferCreateComponent', () => {
  let component: OfferCreateComponent;
  let fixture: ComponentFixture<OfferCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferCreateComponent,
        HeaderInfoComponent],
      imports: [HttpClientModule,  
        MatTableModule,
]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
