import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../type/product';
import { ProductsService } from '../../products.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  productservice = inject(ProductsService);
  router = inject(Router);
  toasterservice = inject(ToastrService)
  product: Product = {
    title: '',
    price: 0 ,
    discount: 0,
    description: '',
    image: '',
    rating: 0
  }


  AddProducts() {
    console.log("Form Submitted..");
    this.productservice.postproduct(this.product).subscribe((result)=>{
      this.toasterservice.success("Product Saved Successfully");
      this.router.navigateByUrl("/");
    });
  }
}
