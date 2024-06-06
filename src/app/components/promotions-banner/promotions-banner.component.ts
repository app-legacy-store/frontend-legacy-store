import { envionment } from './../../../environments/environments';
import { Component } from '@angular/core';
import { IBanner } from 'src/app/interfaces/banner.interface';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'promotions-banner',
  templateUrl: './promotions-banner.component.html',
  styleUrls: ['./promotions-banner.component.scss']
})
export class PromotionsBannerComponent {

  urlImage: string = envionment.urlApiImage;
  banners!: IBanner[];

  constructor(
    private bannerService: BannerService
  ) { }

  ngOnInit() {
    this.getBanners();
  }

  getBanners() {
    this.bannerService.getBanners().subscribe({
      next: (banners) => { 
        this.banners = banners
        console.log(this.banners)
      }
    })
  }

}
