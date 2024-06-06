export interface ICategory {
  id:        string;
  nombre:    string;
  imagenProducto:    string;
  imagenBanner:    string;
  productos: Producto[];
}

export interface Producto {
  id:          string;
  nombre:      string;
  descripcion: string;
  precio:      number;
  stock:       number;
  imagen:      string;
}
