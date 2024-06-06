export interface User {
   id:              string;
   nombre:          string;
   apellidoPaterno: string;
   apellidoMaterno: string;
   email:           string;
   password:        string;
   terminos:        boolean;
   direcciones?:       null | IDireccion[];
   roles:           string[];
}

export interface IDireccion {
   id:           string;
   calle:        string;
   codigoPostal: string;
   numeroCasa:   string;
   colonia:      string;
   estado:       string;
   ciudad:       string;
}
