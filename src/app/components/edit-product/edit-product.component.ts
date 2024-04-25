import { Component, inject, numberAttribute } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  frombuilder = inject(FormBuilder);
  toasterservice = inject(ToastrService)
  productform: FormGroup = this.frombuilder.group({
    id: [''],
    title: ['', [Validators.required]],
    price: [''],
    discount: [''],
    description: ['', [Validators.required, Validators.minLength(50)]],
    image: [''],
    rating: ['']
  })
  productService = inject(ProductsService);
  activatedroute = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    let productId = this.activatedroute.snapshot.params["id"];
    this.productService.getProductbyid(productId).subscribe(result => {
      if (result) {
        console.log("Product data:", result);
        this.productform.patchValue(result);
      } else {
        alert("Product data not found for ID:");
      }
    })
  }

  EditProducts() {
    if (this.productform.invalid) {
      this.toasterservice.error("Please Fill Valid Data Into Form");
      return;
    }
    console.log("Edit Form Called", this.productform.value);
    this.productService.Updateproduct(this.productform.value).subscribe((result) => {
      this.toasterservice.success("Product Updated Successfully");
      this.router.navigateByUrl("/");
    })
  }

  delete(productform : any){
    let id  = this.productform.value.id;
    console.log("Delted Form Called", this.productform.value.id);
    this.productService.Deleteproduct(id).subscribe((result) => {
      this.toasterservice.success("Product Deleted Successfully");
      this.router.navigateByUrl("/");
    })
  }
}
