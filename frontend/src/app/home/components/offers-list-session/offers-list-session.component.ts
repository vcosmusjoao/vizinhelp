import { Component } from '@angular/core';
import { OfferService } from '../../../shared/service/offer/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers-list-session',
  templateUrl: './offers-list-session.component.html',
  styleUrl: './offers-list-session.component.css'
})
export class OffersListSessionComponent {
  items: any[] = [];
  constructor(private offerService: OfferService,private router: Router) { }

  ngOnInit(): void {
    this.offerService.getAllOffers().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  irParaDetalhes(id: number): void {
    this.router.navigate(['/ofertas-detalhe', id]);
  }

}
