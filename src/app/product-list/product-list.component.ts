import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Product} from "../model/product-models";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input() searchTerm: string = '';

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
