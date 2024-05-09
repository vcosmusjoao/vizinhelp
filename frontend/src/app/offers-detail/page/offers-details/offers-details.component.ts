import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../shared/service/offer/offer.service';
import { ActivatedRoute } from '@angular/router';
import { CepService } from '../../../shared/service/cep/cep.service';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrl: './offers-details.component.css'
})
export class OffersDetailsComponent implements OnInit{

  oferta: any;
  endereco: any;
  idOferta?:number;
  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private cepService: CepService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];

      this.offerService.getOfferDetails(id).subscribe((oferta: any) => {
        this.oferta = oferta;
        this.idOferta= oferta.offer_id;
        this.cepService.getAddressByCep(oferta.cep).subscribe((endereco: any) => {
          this.endereco = endereco;
          console.log(this.endereco); // Movido o console.log para dentro da assinatura
        });
      });
    });
  }

  


}
