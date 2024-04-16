import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { OfferComponent } from './shared/component/offer/offer.component';
import { HomePageComponent } from './home/page/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeKeycloak } from './config/init/keycloak-init.factory';
import { NavbarComponent } from './shared/component/navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './home/components/header/header.component';
import { CallToActionComponent } from './home/components/call-to-action/call-to-action.component';
import { InfoSessionComponent } from './home/components/info-session/info-session.component';
import { HowItWorksSessionComponent } from './home/components/how-it-works-session/how-it-works-session.component';
import { OffersListSessionComponent } from './home/components/offers-list-session/offers-list-session.component';
import { MatCardModule } from '@angular/material/card';
import { OffersDetailsComponent } from './offers-detail/page/offers-details/offers-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OfferComponent,
    NavbarComponent,
    HeaderComponent,
    CallToActionComponent,
    InfoSessionComponent,
    HowItWorksSessionComponent,
    OffersListSessionComponent,
    OffersDetailsComponent
  ],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
