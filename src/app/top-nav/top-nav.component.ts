import { Component, OnInit } from '@angular/core';
// import { Products, products } from '../Products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  items = this.productService.getItems();
  index = this.items.length;

   constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
