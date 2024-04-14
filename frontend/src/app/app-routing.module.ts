import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { AuthGuard } from './guard/auth.guard';
import { OfferComponent } from './shared/component/offer/offer.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ofertas', component: OfferComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
