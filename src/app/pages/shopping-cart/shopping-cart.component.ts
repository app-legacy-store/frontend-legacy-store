import { AuthService } from 'src/app/auth/services/auth.service';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CarritoService } from 'src/app/services/Carrito.service';
import { IPedido, PedidoProducto } from 'src/app/interfaces/pedido.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  items!: MenuItem[];
  activeItem!: MenuItem;
  selectedItemPedido: string = 'pedido-pendiente';
  userId: string | null = null;
  userActive: boolean;
  productosCarritoPendiente!: IPedido[];
  pedidoProductos!: PedidoProducto[]
  pedidoId: string;
  totalPedido: number;
  datoPedido!: IPedido;

  constructor(
    private authService: AuthService,
    private carritoService: CarritoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.navbarCart();
    this.getLocalStorage();
    this.pedido(this.activeItem);
    this.buscarDatoPedidoId();
  }

  navbarCart(){
    this.items = [
      {
        label: 'Carrito',
        id: "pedido-pendiente"
      },
      {
        label: 'Mis compras',
        id: "pedido-finalizado"
      }
    ];
    this.activeItem = this.items.find(item => item.id === this.selectedItemPedido)!;
  }

  pedido(event: MenuItem) {
    this.selectedItemPedido = event.id; 
    this.carritoService.pedidoPendiente(this.userId, this.selectedItemPedido).subscribe({
      next: (pedido: IPedido[]) => {
        this.productosCarritoPendiente = pedido;
        console.log(this.productosCarritoPendiente);  
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getLocalStorage(){
    this.userId = this.authService.getIdUser('userId');  
    if (!this.userId) {
      this.userActive = true;
    }  
  }

  buscarDatoPedidoId(){
    this.carritoService.obtenerInformacionPedido(this.userId).subscribe({
      next: (pedido: IPedido) => {
        this.datoPedido = pedido;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  eliminarProducto(pedidoProducto: PedidoProducto): void {
    this.carritoService.eliminarProducto(pedidoProducto.id).subscribe({
      next: () => {
        this.pedidoProductos = this.pedidoProductos?.filter(pedido => pedido.id !== pedidoProducto.id);
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
      }
    });                  
  }

  sumarProducto( pedidoId: string, pedidoProductoId: string, productoId: string): void {
    this.carritoService.agregarProductoUnoPorUno( pedidoId, pedidoProductoId, productoId).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  restarProducto( pedidoId: string, pedidoProductoId: string, productoId: string): void {
    this.carritoService.eliminarProductoUnoPorUno( pedidoId, pedidoProductoId, productoId).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  comprarProducto(pedidoId: string): void {
    this.router.navigate(['/confirm-purchase', pedidoId]);
  }

}
