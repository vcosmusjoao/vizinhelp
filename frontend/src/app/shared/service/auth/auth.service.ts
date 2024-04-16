import { Injectable } from '@angular/core';
import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { KeycloakLoginOptions } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) { }

  keycloakLoginOptions: KeycloakLoginOptions = {
    redirectUri: 'http://localhost:4200/ofertas'
  }

  login():void {
    this.keycloakService.login(this.keycloakLoginOptions);
  }

  logout():void {
    this.keycloakService.logout();
  }

  register():void {
    this.keycloakService.register();
  }

  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }
  
}
