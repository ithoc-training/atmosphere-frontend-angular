import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Page, Product} from "../model/product-models";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  getProducts(sort: string = 'price', order: string = 'asc'): Observable<Page<Product[]>> {

    let url: string = `http://localhost:18080/api/search?sort=${sort},${order}`;
    console.log(`GET ${url}`);

    let products: Observable<Page<Product[]>> = this.httpClient.get<Page<Product[]>>(url);
    console.log(`products: ${products}`);

    return products;
  }

}
