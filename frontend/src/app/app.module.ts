import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HomePageComponent } from './home/page/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeKeycloak } from './config/init/keycloak-init.factory';
import { NavbarComponent } from './shared/component/navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './home/components/header/header.component';
import { CallToActionComponent } from './home/components/call-to-action/call-to-action.component';
import { InfoSessionComponent } from './home/components/info-session/info-session.component';
import { HowItWorksSessionComponent } from './home/components/how-it-works-session/how-it-works-session.component';
import { OffersListSessionComponent } from './home/components/offers-list-session/offers-list-session.component';
import { MatCardModule } from '@angular/material/card';
import { OffersDetailsComponent } from './offers-detail/page/offers-details/offers-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderInfoComponent } from './shared/component/header-info/header-info/header-info.component';
import { OfferUserPageComponent } from './offers-user/page/offer-user-page.component';
import { OfferUserListComponent } from './offers-user/components/offer-user-list/offer-user-list.component';
import { UserService } from './shared/service/user/user.service';
import { CepService } from './shared/service/cep/cep.service';
import { AuthService } from './shared/service/auth/auth.service';
import { OfferService } from './shared/service/offer/offer.service';
import { OfferCreateComponent } from './offer-create/page/offer-create/offer-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderInfoComponent,
    OfferUserPageComponent,
    HomePageComponent,
    NavbarComponent,
    HeaderComponent,
    CallToActionComponent,
    InfoSessionComponent,
    HowItWorksSessionComponent,
    OffersListSessionComponent,
    OffersDetailsComponent,
    OfferUserListComponent,
    OfferCreateComponent
    
  ],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CepService,
    AuthService, 
    OfferService,
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
