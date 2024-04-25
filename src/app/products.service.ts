import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './type/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpclient  = inject(HttpClient);

  getProduct(){
   return this.httpclient.get<Product[]>("http://localhost:3000/ProductItem");
  }

  getProductbyid(Id:number){
    return this.httpclient.get<Product>("http://localhost:3000/ProductItem/"+Id);
   }

   postproduct(product:Product){
    return this.httpclient.post<Product>("http://localhost:3000/ProductItem/",product);
   }

   Updateproduct(product:Product){
    return this.httpclient.put<Product>("http://localhost:3000/ProductItem/"+product.id,product);
   }

   Deleteproduct(Id:number){
    return this.httpclient.delete<Product>("http://localhost:3000/ProductItem/"+ Id);
   }
   
  constructor() { }
}
