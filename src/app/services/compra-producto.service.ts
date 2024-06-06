import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envionment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CompraProductoService {

  uralbaseApi: string = envionment.urlApi;

  constructor(
    private http: HttpClient
  ) { }


  obtenerPedidoCompra(pedidoId: string) {
    return this.http.get(
      `${this.uralbaseApi}/pedidos/pedido-pendiente/comprar/${pedidoId}`
    );
  }

  confirmarCompra(pedidoId: string, tarjetaId: string, direccionId: string) {
    return this.http.patch(
      `${this.uralbaseApi}/pedidos/pedido-confirmado/actualizar/${pedidoId}`,
      {
        tarjetaId,
        direccionId
      }
    );
  }

}
