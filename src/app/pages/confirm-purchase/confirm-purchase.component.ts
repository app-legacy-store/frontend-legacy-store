import { CompraProductoService } from './../../services/compra-producto.service';
import { MessageService } from 'primeng/api';
import { IDireccion } from 'src/app/auth/interfaces/user.interface';
import { AddressService } from './../../services/address.service';
import { Component } from '@angular/core';
import { TargetService } from 'src/app/services/target.service';
import { ITarjeta } from 'src/app/interfaces/tarjeta.interface';
import { ActivatedRoute } from '@angular/router';
import { IPedido } from 'src/app/interfaces/pedido.interface';
import { envionment } from 'src/environments/environments';

@Component({
  selector: 'app-confirm-purchase',
  templateUrl: './confirm-purchase.component.html',
  styleUrls: ['./confirm-purchase.component.scss']
})
export class ConfirmPurchaseComponent {

  events: string[];
  currentStep: number;
  address: string;
  cardNumber: string;
  selectedAddress: IDireccion;
  dataAddress: IDireccion[] = [] ;
  flagAddress: boolean = true;
  dataTarjeta: ITarjeta[] = [];
  flagTarjeta: boolean = true;
  selectedTarjeta: ITarjeta;
  dataPedidoSelected: IPedido;
  urlBaseImg: string = envionment.urlApiImage;

  constructor(
    private addressService: AddressService,
    private tarjetaService: TargetService,
    private messageService: MessageService,
    private compraProductoService: CompraProductoService, 
    private route: ActivatedRoute
  ) {
    this.events = [
      "Dirección de entrega",
      "Método de pago",
      "Confirmar"
    ];
    this.currentStep = 0;
    this.address = '';
    this.cardNumber = '';
    
  }


  ngOnInit() {
    this.listAdressUser();
    this.listCardsUser();
    this.pedidoData();
  }

  pedidoData() {
    this.route.paramMap.subscribe(params => {
      const pedidoId = params.get('id');
      this.compraProductoService.obtenerPedidoCompra(pedidoId).subscribe({
        next: (dataPedido: IPedido) => {
          this.dataPedidoSelected = dataPedido;
        },
        error: (error) => {
          console.log('Error:', error);
        }
      });
    });
  }

  listAdressUser() {
    const userActivate = localStorage.getItem('userId');
    this.addressService.getListAddressUser(userActivate).subscribe({
      next: (addresse: IDireccion[]) => {
        this.dataAddress = addresse || [];
        if (this.dataAddress.length > 0) {
          this.flagAddress = true;
        } else {
          this.flagAddress = false;
        }
        console.log('Direcciones:', addresse);
      },
      error: (error) => {
        console.log('Error:', error);
      }
    });
  }

  onAddressChange(event: IDireccion) {
    this.selectedAddress = event;
    console.log('Dirección seleccionada:', event);
    console.log('Dirección seleccionada:', );
    const address: string =  this.selectedAddress.id
  }

  listCardsUser() {
    const userActivate = localStorage.getItem('userId');
    this.tarjetaService.getTarjetasUsuario(userActivate).subscribe({
      next: (dataTarjeta: ITarjeta[]) => {
        this.dataTarjeta = dataTarjeta || [];
        if (dataTarjeta.length > 0) {
          this.flagTarjeta = true;
        } else {
          this.flagTarjeta = false;
        }
      },
      error: (error) => {
        console.log('Error:', error);
      }
    });
  }

  onTarjetaChange(event: ITarjeta) {
    this.selectedTarjeta = event;
  }
  
  confirmarDireccion() {
    if (this.selectedAddress) {
      this.currentStep += 1;
    } else {
      this.messageService.add({severity:'error', summary:'Error', detail:'No se ha seleccionado ninguna dirección'});
    }    
  }

  confirmarTarjeta() {
    if (this.selectedTarjeta) {
      this.currentStep += 1;
    } else {
      this.messageService.add({severity:'error', summary:'Error', detail:'No se ha ingresado el número de tarjeta'});
    }
  }
  

  preview(){
    this.currentStep -= 1;
  }

  confirmCompra() {
    // this.compraProductoService.confirmarCompra(this.dataPedidoSelected.id, this.selectedAddress, this.selectedTarjeta).subscribe({
    //   next: (data: any) => {
    //     this.messageService.add({severity:'success', summary:'Compra realizada', detail:'La compra se ha realizado con éxito'});
    //   },
    //   error: (error) => {
    //     this.messageService.add({severity:'error', summary:'Error', detail:'No se ha podido realizar la compra'});
    //   }
    // });
  }
}