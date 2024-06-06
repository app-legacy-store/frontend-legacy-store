import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  nav!: MenuItem[];

  ngOnInit() {
    this.itemsNav();
  }

  itemsNav(){
    this.nav = [
      {  label: 'Inicio', routerLink:'home', icon: 'pi pi-home'  },
      {  label: 'Todos los productos', routerLink:'products', icon: 'pi pi-shopping-bag' },
      {  label: 'Contenido del canal', routerLink:'canal-youtube', icon: 'pi pi-user' }
    ];
  }
}
