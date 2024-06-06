import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category.interface';
import { IProduct } from 'src/app/interfaces/product.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { envionment } from 'src/environments/environments';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  @Input() nombreSelect: string = "";
  @Input() imagenSelect: string ="";
  @Input() tipoCategoria: string = "";
  @Input() descripcionSelect: string ="";
  @Input() precioSelect: number = 0;
  @Input() stockSelect: number = 0;
  @Input() idSelect: string ="";

  urlLocalImg: string = envionment.urlApiImage;
  titleProduct: string = "Aquí estan todos los productos"
  idRecibido!: string;
  private subscription: Subscription;
  visible: boolean = false;
  categorySelectId: ICategory | null = null;
  productSelect: IProduct | null = null;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getIdComponent();
  }

  getIdComponent() {
    this.subscription = this.categoriesService.obtenerCategoriaId().subscribe(
      id => {
        this.idRecibido = id;
        if (this.idRecibido) {
          this.getCategoryId(this.idRecibido);
        } else {
          console.log('No hay id');
        }
      }
    )
  }

  getCategoryId(id: string) {
    this.categoriesService.getCategoryId(id).subscribe({
      next: (category: ICategory) => {
        this.categorySelectId = category[0];
        console.log('categorySelectId: ', this.categorySelectId);
      },
      error: err => {
        console.error('Error: ', err);
      }
    });    
  }

  showModal(id: IProduct) {
    this.productSelect = id;
    this.visible = true;
    this.nombreSelect =  this.productSelect.nombre;
    this.imagenSelect = this.productSelect.imagen;
    this.descripcionSelect= this.productSelect.descripcion;
    this.precioSelect = this.productSelect.precio;
    this.stockSelect = this.productSelect.stock;
    this.idSelect = this.productSelect.id;
  }

  closeModal() {
    this.visible = false;
  }

}
