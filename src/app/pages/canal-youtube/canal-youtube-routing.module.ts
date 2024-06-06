import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanalYoutubeComponent } from './canal-youtube.component';

const routes: Routes = [
  {
    path: '',
    component: CanalYoutubeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanalYoutubeRoutingModule { }
