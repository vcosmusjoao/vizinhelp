import { Component } from '@angular/core';
import { OfferService } from '../../shared/service/offer/offer.service';
import { UserService } from '../../shared/service/user/user.service';

@Component({
  selector: 'app-offer-user-page',
  templateUrl: './offer-user-page.component.html',
  styleUrl: './offer-user-page.component.css'
})
export class OfferUserPageComponent {

  user: string ="";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo():void{
    this.userService.getInfoUser().subscribe(user=>{this.user= user.name});
  }

  
}
