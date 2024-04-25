import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject, output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Product } from '../../type/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  ProductItem = [0,1,2,3];
  @Input() product!:Product;
  @Output() viewProduct = new EventEmitter<number>();

  View(){
    console.log("Viewing Some Product ..")
    this.viewProduct.emit(this.product.id);
  }
}
