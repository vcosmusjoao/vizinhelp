import { Component, Input } from '@angular/core';
import { OfferService } from '../shared/service/offer/offer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-interest',
  templateUrl: './offer-interest.component.html',
  styleUrl: './offer-interest.component.css'
})
export class OfferInterestComponent {

  constructor(private offerService: OfferService, private formBuilder: FormBuilder,) { 
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      offerId: [null] 
    });
  }
  @Input() offerId?: number;

  form: FormGroup;

  submitInterest(): void {
    if (this.form.valid) {
      this.form.patchValue({ offerId: this.offerId });
  
      this.offerService.sendInterest(this.form.value).subscribe((response)=>{
        this.form.reset();
        alert('E-mail enviado com sucesso!');
        window.location.reload();
      });
    } else {
      alert('E-mail não enviado! Tente novamente mais tarde!');
      console.log('Formulário inválido! Por favor, preencha todos os campos corretamente.');
    }
  }
  
}
