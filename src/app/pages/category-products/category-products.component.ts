import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category.interface';
import { IProduct } from 'src/app/interfaces/product.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { envionment } from 'src/environments/environments';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent {
  urlApiImg = envionment.urlApiImage;
  categoryId!: string;
  categoryProducts!: ICategory;
  categoryProductName!: string;
  visible: boolean = false;
  productSelect: IProduct | null = null;
  @Input() nombreProducto: string = '';
  @Input() imagenProduct: string = '';
  @Input() descripcionProduct: string = '';
  @Input() precioProduct: number = 0;
  @Input() stockProduct: number = 0;
  @Input() idProducto: string = '';

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id')!;
      this.loadCategoryProducts(this.categoryId);
    });
  }

  loadCategoryProducts(id: string): void {
    this.categoriesService.getCategoryId(id).subscribe({
      next: (data: ICategory) => {
        this.categoryProducts = data;
        this.categoryProductName = data[0].nombre;
        console.log('Category products', this.categoryProducts);
        
      },
      error: (err) => {
        console.error('Error fetching category products', err);
      }
    });
  }

  showProduct(i: IProduct) {
    this.productSelect = i
    this.visible = true;
    this.nombreProducto = i.nombre;
    this.imagenProduct = i.imagen;
    this.descripcionProduct = i.descripcion;
    this.precioProduct = i.precio;
    this.stockProduct = i.stock;
    this.idProducto = i.id;    
  }

  closeModal() {
    this.visible = false;
  }

}
