import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {CommonModule} from "@angular/common";
import {Product} from "../model/product-models";

@Component({
  selector: 'app-search-and-filtering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-and-filtering.component.html',
  styleUrl: './search-and-filtering.component.css'
})
export class SearchAndFilteringComponent implements OnInit {

  protected products: Product[] = [];

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {

    this.productService.getProducts('price', 'asc')
      .subscribe(products => {
        products.content.forEach(product => {
          console.log('product:', product);
        });
        this.products = products.content
      });
  }

}
