import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CategoryProductsRoutingModule } from './category-products-routing.module';
import { CategoryProductsComponent } from './category-products.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    CategoryProductsComponent
  ],
  imports: [
    CommonModule,
    CategoryProductsRoutingModule,
    ComponentsModule,
    SharedModule,
    CardModule,
    ButtonModule,
    ToastModule
  ]
})
export class CategoryProductsModule { }
