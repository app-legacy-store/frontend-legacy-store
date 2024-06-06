import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AccessButtonComponent } from './components/button/access-button/access-button.component';
import { DenyButtonComponent } from './components/button/deny-button/deny-button.component';
import { BlueButtonComponent } from './components/button/blue-button/blue-button.component';
import { BannerComponent } from './components/banner/banner.component';

const components = [
  AccessButtonComponent,
  DenyButtonComponent,
  BlueButtonComponent,
  BannerComponent
]

@NgModule({
  exports: [ components ],
  declarations: [ components ],
  imports: [
    CommonModule,
    ButtonModule,
    BreadcrumbModule
  ]
})
export class SharedModule { }
