import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ComponentsModule,
    ScrollTopModule,
    SharedModule,
    ToastModule
  ]
})
export class ProductsModule { }
