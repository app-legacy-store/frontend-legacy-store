import { User } from "../auth/interfaces/user.interface";
import { IProduct } from "./product.interface";

export interface IPedido {
  id:              string;
  fechaRegistro:   Date;
  direccionEnvio:  string | null;
  estadoPedido:    string;
  totalPedido:     number;
  cantTotalProductos: number;
  pedidoProductos: PedidoProducto[];
  user:            User;
}

export interface PedidoProducto {
  id:             string;
  fechaRegistro:  Date;
  cantidad:       number;
  precioUnitario: number;
  subTotal:       number;
  estadoPedidoProducto:   string;
  producto:      IProduct;
}