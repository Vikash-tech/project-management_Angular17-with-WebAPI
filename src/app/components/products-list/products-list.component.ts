import { Component, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponentComponent } from '../../search-component/search-component.component';
import { Product } from '../../type/product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [RouterOutlet,MatIconModule,HomeComponent,ProductCardComponent,SearchComponentComponent,RouterOutlet],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  FilteredProduct:Product[]=[];
  ProductItem:Product[]=[];
  ProductService = inject(ProductsService);
  Router = inject(Router);
 
 
  ngOnInit(){
   this.ProductService.getProduct().subscribe((result)=>{
       console.log(result);
       this.ProductItem = result;
       this.FilteredProduct = this.ProductItem;
   });
  }
 
   OnSearch(search:string){
    console.log("Home",search);
    if(search){
     this.FilteredProduct = this.ProductItem.filter(x=>x.title.toLowerCase()
     .includes(search.toLowerCase()) || x.description.toLowerCase()
     .includes(search.toLowerCase()));
    }else{
     this.FilteredProduct = this.ProductItem;
    }
   }
 
   OnViewProduct(event:any){
     console.log("On View Prodeuct ..",event);
     this.Router.navigateByUrl("product/"+ event)
   }
   
}
