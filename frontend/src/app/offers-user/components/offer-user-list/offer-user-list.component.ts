import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../shared/service/offer/offer.service';

@Component({
  selector: 'app-offer-user-list',
  templateUrl: './offer-user-list.component.html',
  styleUrl: './offer-user-list.component.css'
})
export class OfferUserListComponent implements OnInit {

  ngOnInit(): void {
    this.loadOffers();
  }

  constructor(private offerService: OfferService){}
  offers: any[] = [];

  displayedColumns: string[] = ['descricao', 'categoria', 'data', 'acoes'];

  dataSource: any[] = [
      { descricao: 'Oferta 1', categoria: 'Categoria 1', data: new Date() },
      { descricao: 'Oferta 2', categoria: 'Categoria 2', data: new Date() },
      { descricao: 'Oferta 3', categoria: 'Categoria 3', data: new Date() }
  ];

  visualizar(oferta: any) {
      // Lógica para visualizar a oferta
  }

  apagar(oferta: any) {
      // Lógica para apagar a oferta
  }

  
  loadOffers(): void {
    this.offerService.getAllOffersByUserLogged().subscribe(
      offers => {
        this.offers = offers;
        this.dataSource = offers; // 
      },
      error => {
        console.error('Error fetching offers:', error);
      }
    );
  }
}
