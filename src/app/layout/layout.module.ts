import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { ComponentsModule } from '../components/components.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';

const components = [
    LayoutComponent,
    NavbarComponent,
    ChatBotComponent
]

@NgModule({
  exports:[ components ],
  declarations: [ components, FooterComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MenubarModule,
    InputTextModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    DialogModule,
    SharedModule
  ]
})
export class LayoutModule { }
