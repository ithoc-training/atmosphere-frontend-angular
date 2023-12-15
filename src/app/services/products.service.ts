import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Pagination, Product} from "../model/product-models";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  getProducts(sort: string = 'price', order: string = 'asc'): Observable<Pagination<Product[]>> {

    let url: string = `http://localhost:18080/api/search?search=&sortBy=${sort}&sortOrder=${order}`;
    console.log(`GET ${url}`);

    let products: Observable<Pagination<Product[]>> = this.httpClient.get<Pagination<Product[]>>(url);
    console.log(`products: ${products}`);

    return products;
  }

}
