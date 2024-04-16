import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../shared/service/offer/offer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrl: './offers-details.component.css'
})
export class OffersDetailsComponent implements OnInit{

  oferta: any;
  
  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) { }


  ngOnInit(): void {
   this.route.params.subscribe(params =>{
    const id = +params['id'];
    this.offerService.getOfferDetails(id).subscribe((oferta: any)=>{
      this.oferta = oferta;
    })
   })
  }

  


}
