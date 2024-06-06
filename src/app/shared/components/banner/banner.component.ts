import { MenuItem } from 'primeng/api';
import { envionment } from './../../../../environments/environments';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  @Input() categoryProduct!: string;
  @Input() categoryName!: string;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  urlApiImg: string = envionment.urlApiImage;

  constructor() { }

  ngOnInit() {
    this.items = [
        { icon: 'pi pi-home' }, 
        { label: 'Productos' },
        { label: this.categoryProduct }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
}
}
