import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
// import { products } from '../Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.productService.getItems();
  index = this.items.length;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  prodDelete(product: any){
  this.productService.removeFromCart(product);
  this.index = this.items.length;
  }

}
