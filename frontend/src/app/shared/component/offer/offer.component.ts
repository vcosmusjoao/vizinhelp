import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../service/offer/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent implements OnInit{

  offers: any[] = [];

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers(): void {
      this.offerService.getAllOffersByUserLogged().subscribe(
        offers => {
          this.offers = offers;
        },
        error => {
          console.error('Error fetching offers:', error);
        }
      );
    }
  
}
