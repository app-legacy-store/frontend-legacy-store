import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { envionment } from 'src/environments/environments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent {

  categories!: ICategory[];
  urlApiImg = envionment.urlApiImage;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ){ }

  ngOnInit() {
    this.getCategories();
   }

  idCategoria(id: string) {
    this.router.navigate(['/category-products', id]);
  }

  getCategories(){
    return this.categoriesService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
