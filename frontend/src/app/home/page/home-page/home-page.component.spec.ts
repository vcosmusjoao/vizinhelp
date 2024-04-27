import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';
import { InfoSessionComponent } from '../../components/info-session/info-session.component';
import { HowItWorksSessionComponent } from '../../components/how-it-works-session/how-it-works-session.component';
import { OffersListSessionComponent } from '../../components/offers-list-session/offers-list-session.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomePageComponent, 
        HeaderComponent,
        CallToActionComponent,
        InfoSessionComponent,
        HowItWorksSessionComponent,
        OffersListSessionComponent
      ],
      imports:[HttpClientModule]
      
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
