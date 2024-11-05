import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../products/producto.mock';
import { productList } from '../products/producto.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})



export class ProductDetailComponent implements OnInit{
  
  producto: string = '';
  productList: product[] = productList;

  constructor(private _route: ActivatedRoute){}
  
  ngOnInit(): void {
      this._route.params.subscribe(params =>
      {
        //this.productList = this.productList.find(product => product.id == params['productId']);
        this.producto = params['productId'];
        console.log(params['productId']);

      }
      )
  }
}
