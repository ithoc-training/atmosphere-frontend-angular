import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {CommonModule} from "@angular/common";
import {Product} from "../model/product-models";
import {ProductListComponent} from "../product-list/product-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-and-filtering',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ReactiveFormsModule],
  templateUrl: './search-and-filtering.component.html',
  styleUrl: './search-and-filtering.component.css'
})
export class SearchAndFilteringComponent implements OnInit {

  protected products: Product[] = [];
  protected searchTerm: string = '';

  searchForm = this.formBuilder.group({
    searchTerm: ''
  });

  constructor(private productService: ProductsService, private formBuilder: FormBuilder) {
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


  onSubmit() {

    console.log('this.searchForm.value.searchTerm:', this.searchForm.value.searchTerm);
    this.searchTerm = this.searchForm.value.searchTerm ? this.searchForm.value.searchTerm : ''; // truthy syntax
  }

}
