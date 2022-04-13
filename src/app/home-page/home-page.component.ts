import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Brands, brands } from '../Brands';
import { Products, products} from '../Products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

    brands = brands;
    products = products;
    seclectedIndex = 0;
    marginChange: any = 0;
    margin = this.marginChange;
    
    constructor() { }
    
    ngOnInit(): void {
    }

    // Owl-Carousel/ Top Slide/ Section1
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: true,
        navSpeed: 700,
        navText: ['', ''],
        nav: false,
        autoplay: true,
        responsive: {
          0: {items: 1},
          400: {items: 1},
          740: {items: 1},
          940: {items: 1}
        },
      }


      slideNext(){
        this.marginChange  += 100;
      }

      slidePrevious(){
        this.marginChange  -= 100;
      }
}
