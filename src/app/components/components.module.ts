import { InputSwitchModule } from 'primeng/inputswitch';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { SeparatorComponent } from '../shared/components/separator/separator.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { UserProfileSidebarComponent } from './user-profile-sidebar/user-profile-sidebar.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { PromotionsBannerComponent } from './promotions-banner/promotions-banner.component';
import { ProductSectionComponent } from './product-section/product-section.component';

const componets = [
  ProductCardComponent,
  CategoryPanelComponent,
  ProductCarouselComponent,
  SeparatorComponent,
  ProductModalComponent,
  CartComponent,
  UserLoginComponent,
  UserProfileSidebarComponent,
  PromotionsBannerComponent,
  ProductSectionComponent
]

@NgModule({
  exports:[ componets ],
  declarations: [ componets ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TieredMenuModule,
    AutoCompleteModule,
    DialogModule,
    CarouselModule,
    DividerModule,
    AutoCompleteModule,
    TableModule,
    SharedModule,
    DropdownModule,
    FormsModule,
    SidebarModule,
    InputSwitchModule,
    MessagesModule,
    ToastModule
  ]
})
export class ComponentsModule { }
