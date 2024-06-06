import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    SharedModule,
    TooltipModule
  ]
})
export class HomeModule { }
