import { envionment } from 'src/environments/environments';
import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() cantProduct: number = 20;
  urlLocalImg: string = envionment.urlApiImage;
  product!: IProduct[];
  visible: boolean = false;
  productSelect: IProduct | null = null;
  contador: number = 0;
  productId: IProduct | null = null;

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.getProductAll();
  }

  showProduct(i: IProduct) {
    this.productSelect = i
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  getProductAll(){
    this.productService.getProduct().subscribe(
      product => {
        this.product = product.slice(0, this.cantProduct);
      }
    )
  }
}
