import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/page/home-page/home-page.component';
import { AuthGuard } from './guard/auth.guard';
import { OffersDetailsComponent } from './offers-detail/page/offers-details/offers-details.component';
import { OfferUserPageComponent } from './offers-user/page/offer-user-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ofertas', component: OfferUserPageComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'ofertas-detalhe/:id', component: OffersDetailsComponent }, // Corrigido para 'ofertas-detalhe/:id'
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
