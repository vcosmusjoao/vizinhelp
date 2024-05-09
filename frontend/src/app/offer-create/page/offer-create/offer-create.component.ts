import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfferService } from '../../../shared/service/offer/offer.service';

@Component({
  selector: 'app-offer-create',
  templateUrl: './offer-create.component.html',
  styleUrl: './offer-create.component.css'
})
export class OfferCreateComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private offerService: OfferService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required] ,
      image_url:['',Validators.required],
      category:['',Validators.required],
      cep:['',Validators.required],
      availability:[''],
      requirements:[''],
      capacity:[0],
      description:['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.offerService.postOffer(this.form.value)
        .subscribe(
          (response) => {
            this.form.reset();
            window.location.reload();
            // Aqui você pode redirecionar para a página de detalhes da oferta, por exemplo
          },
          (error) => {
            console.error('Erro ao criar oferta:', error);
            // Aqui você pode tratar o erro adequadamente, por exemplo, mostrando uma mensagem de erro ao usuário
          }
        );
    }
  }

}
