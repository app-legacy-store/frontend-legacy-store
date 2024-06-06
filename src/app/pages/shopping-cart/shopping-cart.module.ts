import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { TabMenuModule } from 'primeng/tabmenu';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  exports: [ ShoppingCartComponent ],
  declarations: [ ShoppingCartComponent ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    TabMenuModule,
    ComponentsModule,
    DividerModule,
    ButtonModule
  ]
})
export class ShoppingCartModule { }
