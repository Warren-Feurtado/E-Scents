import { Component, OnInit } from '@angular/core';
import { Products, products} from '../Products';

@Component({
  selector: 'app-mens-page',
  templateUrl: './mens-page.component.html',
  styleUrls: ['./mens-page.component.css']
})
export class MensPageComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
