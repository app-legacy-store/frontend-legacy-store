import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'shopping-cart',
    loadChildren:() => import('./pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
    // canActivate: [ canActivateGuard ]
  },
  {
    path:'user-profile',
    loadChildren:() => import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule),
    // canActivate: [ canActivateGuard ]
  },
  {
    path:'products',
    loadChildren:() => import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'user-form',
    loadChildren:() => import('./pages/user-form/user-form.module').then(m => m.UserFormModule)    
  },
  {
    path:'category-products/:id',
    loadChildren:() => import('./pages/category-products/category-products.module').then(m => m.CategoryProductsModule)
  },
  {
    path:'confirm-purchase/:id',
    loadChildren:() => import('./pages/confirm-purchase/confirm-purchase.module').then(m => m.ConfirmPurchaseModule)
  },
  {
    path:'canal-youtube',
    loadChildren:() => import('./pages/canal-youtube/canal-youtube.module').then(m => m.CanalYoutubeModule)
  },
  {
    path: '**', 
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
