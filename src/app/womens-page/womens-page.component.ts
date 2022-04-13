import { Component, OnInit } from '@angular/core';
import { Products, products} from '../Products';

@Component({
  selector: 'app-womens-page',
  templateUrl: './womens-page.component.html',
  styleUrls: ['./womens-page.component.css']
})
export class WomensPageComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
