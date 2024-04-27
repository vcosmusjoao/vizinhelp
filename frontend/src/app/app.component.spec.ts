import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from './shared/service/auth/auth.service';
import { KeycloakService } from 'keycloak-angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderInfoComponent } from './shared/component/header-info/header-info/header-info.component';
import { HeaderComponent } from './home/components/header/header.component';
import { OffersDetailsComponent } from './offers-detail/page/offers-details/offers-details.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[
        AuthService,
        KeycloakService
      ],
      imports: [
        RouterTestingModule,
        MatTableModule,
        MatToolbarModule
      ],
    
      declarations: [
        AppComponent,
        NavbarComponent,
        HeaderInfoComponent,
        HeaderComponent,
        OffersDetailsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });

});
