import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../type/product';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule,MatIconModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product!:Product;
 productService = inject(ProductsService);
 activatedroute = inject(ActivatedRoute);


  ngOnInit(){
  console.log();
    let Productid = this.activatedroute.snapshot.params["id"];
  this.productService.getProductbyid(Productid).subscribe((result)=>{
  this.product = result;
  })
  }
}
