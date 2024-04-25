import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

export const routes: Routes = [
    {
       path:"",
       component:ProductsListComponent
    },
    {
        path:"products",
        component:ProductsListComponent
     },
     {
      path:"product/:id",
      component:ProductDetailsComponent
   },
   {
      path:"AddProduct",
      component:AddProductComponent
   },
   {
      path:"edit-product/:id",
      component:EditProductComponent
   },

];
