import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { envionment } from 'src/environments/environments';

@Component({
  selector: 'product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent {
  urlLocalImg: string = envionment.urlApiImage;
  product!: IProduct[];
  productSelect: IProduct | null = null;
  visible: boolean = false;

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.getProductAll();
  }

  showProduct(product: IProduct) {
    this.productSelect = product
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  getProductAll(){
    const numberOfProducts = 5;
    this.productService.getProduct().subscribe(
      products => {
        const shuffledProducts = products.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, numberOfProducts);
        this.product = selectedProducts;
      }
    );
  }
}
