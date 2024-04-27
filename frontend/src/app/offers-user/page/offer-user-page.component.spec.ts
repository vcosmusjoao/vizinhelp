import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferUserPageComponent } from './offer-user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderInfoComponent } from '../../shared/component/header-info/header-info/header-info.component';
import { OfferUserListComponent } from '../components/offer-user-list/offer-user-list.component';
import { MatTableModule } from '@angular/material/table';

describe('OfferUserPageComponent', () => {
  let component: OfferUserPageComponent;
  let fixture: ComponentFixture<OfferUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OfferUserPageComponent,
         HeaderInfoComponent,
          OfferUserPageComponent, 
          OfferUserListComponent],
      imports: [HttpClientModule,  
               MatTableModule,
      ]
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
