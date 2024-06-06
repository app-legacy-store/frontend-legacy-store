import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { ConfirmPurchaseRoutingModule } from './confirm-purchase-routing.module';
import { ConfirmPurchaseComponent } from './confirm-purchase.component';
import { CardFormComponent } from './card-form/card-form.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
  declarations: [
    ConfirmPurchaseComponent,
    CardFormComponent,
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    ConfirmPurchaseRoutingModule,
    TimelineModule,
    CardModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class ConfirmPurchaseModule { }
