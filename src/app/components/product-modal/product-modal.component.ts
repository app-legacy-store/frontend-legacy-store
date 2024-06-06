import { MessageService } from 'primeng/api';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { envionment } from 'src/environments/environments';
import { DataExchangeService } from './../../services/dataExchange.service';
import { CarritoService } from 'src/app/services/Carrito.service';

@Component({
  selector: 'product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent {
  @Input() visible: boolean = false;
  @Input() id: string = "";
  @Input() nombre: string = "";
  @Input() imagen: string = "";
  @Input() categoria: string = "";
  @Input() descripcion: string = "";
  @Input() precio: string = "";
  @Input() stock: number = 0;
  @Output() modalClosed = new EventEmitter<void>();
  urlLocalImg: string = envionment.urlApiImage;
  cantidad: number = 0;
  visibleLogin: boolean = false;

  constructor(
    private dataExchangeService: DataExchangeService,
    private messageService: MessageService,
    private carritoService: CarritoService
  ) { }


  onHide() {
    this.modalClosed.emit();
    this.cantidad = 0;
  }

  sum(){
    if(this.cantidad < this.stock) {
      this.cantidad++;
    }
  }

  rest(){
    if(this.cantidad > 0) {
      this.cantidad--
    }
  }

  carrito() {
    // const productoId: string = this.id;
    const productId: string = this.id.toString();
    const userIdActive = localStorage.getItem('userId');
    if(userIdActive === null) {
      this.dataExchangeService.updateLoginStatus(true);
      return 
    }
    if (this.cantidad === 0) {
      this.messageService.add({severity:'error', summary:'Error', detail:'La cantidad debe ser mayor a 0'});
      return      
    }
    this.carritoService.agregarAlCarrito(userIdActive, productId, this.cantidad).subscribe({
      next: () => {
        console.log('Producto agregado al carrito:\n'+ this.cantidad + '\n'+ productId + '\n'+userIdActive);
        this.messageService.add({severity:'success', summary:'Éxito', detail:'Producto agregado al carrito'});
        this.modalClosed.emit();
        this.cantidad = 0;
      },
      error: () => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Error al agregar el producto al carrito'});
      }
    })     
  }
}
