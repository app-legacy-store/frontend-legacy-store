import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ICategory } from '../../interfaces/category.interface';

@Component({
  selector: 'category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.scss']
})
export class CategoryPanelComponent {

  category!:ICategory[];
  selectedCategory!: string;
  categorySelectId!: ICategory;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      category => {
        this.category = category;
      }
    )
  }
  
  onSelectCategory(id: string) {
    this.categoriesService.enviarCategoriaId(id);    
  }
}
