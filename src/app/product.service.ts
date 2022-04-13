import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items: Products[] = [];

  addToCart(product: Products) {
    this.items.push(product);
  }

  removeFromCart(product: Products) {
    const index = this.items.findIndex((item: any)=> item.id == product.id)

    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private http: HttpClient) { }
}
