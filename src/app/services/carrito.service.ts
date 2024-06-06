import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envionment } from 'src/environments/environments';
import { IPedido, PedidoProducto } from '../interfaces/pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  
  private urlEndPoint: string = envionment.urlApi
  private HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
  constructor(
    private http: HttpClient
  ) { }


  agregarAlCarrito(userId: string, productId: string, cantidad: number): Observable<IPedido> {
    return this.http.post<IPedido>(
      `${this.urlEndPoint}/pedidos/pedido-producto`,
      { userId, productId, cantidad },
      {headers: this.HttpHeaders}
    );
  }

  pedidoPendiente(id: string, selectedItemPedido: string): Observable<IPedido[]> {
    return this.http.get<IPedido[]>(
      `${this.urlEndPoint}/pedidos/${selectedItemPedido}/${id}/productos`
    );
  }

  eliminarProducto(pedidoProductos: string): Observable<PedidoProducto> {
    return this.http.delete<PedidoProducto>(
      `${this.urlEndPoint}/pedidos/pedido-pendiente/producto/delete/${pedidoProductos}`,
      { headers: this.HttpHeaders }
    );
  }

  obtenerInformacionPedido(userId: string): Observable<IPedido> { 
    return this.http.get<IPedido>(
      `${this.urlEndPoint}/pedidos/pedido-pendiente/dato-pedido/${userId}`
    );
  }

  agregarProductoUnoPorUno( pedidoId: string, pedidoProductoId: string, productoId: string): Observable<PedidoProducto> { 
    return this.http.post<PedidoProducto>(
      `${this.urlEndPoint}/pedidos/pedido-pendiente/update/${pedidoId}/${pedidoProductoId}/${productoId}`,
      { pedidoId, pedidoProductoId, productoId },
      { headers: this.HttpHeaders }
    );
  }

  eliminarProductoUnoPorUno( pedidoId: string, pedidoProductoId: string, productoId: string): Observable<PedidoProducto> {
    return this.http.post<PedidoProducto>(
      `${this.urlEndPoint}/pedidos/pedido-pendiente/update/eliminar/${pedidoId}/${pedidoProductoId}/${productoId}`,
      { headers: this.HttpHeaders }
    );
  }

}
