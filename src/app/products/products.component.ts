import { Component } from '@angular/core';
import { productList } from './producto.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  productList = productList;
}
