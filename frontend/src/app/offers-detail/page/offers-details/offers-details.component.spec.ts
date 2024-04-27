import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDetailsComponent } from './offers-details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('OffersDetailsComponent', () => {
  let component: OffersDetailsComponent;
  let fixture: ComponentFixture<OffersDetailsComponent>;

  class MockActivatedRoute {
    params = of({ id: 'mocked-id' }); // Simula um Observable de parâmetros
  }
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffersDetailsComponent],
      imports:[RouterModule, HttpClientModule],
      providers:[
        {provide: ActivatedRoute, useClass: MockActivatedRoute}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
