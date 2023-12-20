import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Item, Pagination} from "../model/item-models";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) {
  }

  getItems(): Observable<Pagination<Item[]>> {

//    let url: string = `http://localhost:28080/api/search?sort=${sort},${order}`;
    let url: string = 'http://localhost:28080/api/items';
    console.log(`GET ${url}`);

    let items: Observable<Pagination<Item[]>> = this.httpClient.get<Pagination<Item[]>>(url);
    console.log(`Items: ${items}`);

    return items;
  }

}
