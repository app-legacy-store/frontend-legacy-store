import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmPurchaseComponent } from './confirm-purchase.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { CardFormComponent } from './card-form/card-form.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPurchaseComponent
  },
  {
    path: 'address-form',
    component: AddressFormComponent
  },
  {
    path: 'card-form',
    component: CardFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmPurchaseRoutingModule { }
