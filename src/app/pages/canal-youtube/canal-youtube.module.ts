import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalYoutubeRoutingModule } from './canal-youtube-routing.module';
import { CanalYoutubeComponent } from './canal-youtube.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [ CanalYoutubeComponent ],
  exports: [ CanalYoutubeComponent ],
  imports: [
    CommonModule,
    CanalYoutubeRoutingModule,
    ButtonModule
  ]
})
export class CanalYoutubeModule { }
