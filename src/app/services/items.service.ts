import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Item, Page, Product} from "../model/product-models";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) {
  }

  getItems(): Observable<Page<Item[]>> {

//    let url: string = `http://localhost:28080/api/search?sort=${sort},${order}`;
    let url: string = 'http://localhost:28080/api/items';
    console.log(`GET ${url}`);

    let items: Observable<Page<Item[]>> = this.httpClient.get<Page<Product[]>>(url);
    console.log(`Items: ${items}`);

    return items;
  }

}
