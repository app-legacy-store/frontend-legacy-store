import { PedidoProducto } from "./pedido.interface";

export interface IProduct {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: CategoriaProducto;
  imagen: string;
  // activo: boolean;
  pedidoProducto: PedidoProducto[];
}

export interface CategoriaProducto {
  id: number;
  nombre: string;
}
