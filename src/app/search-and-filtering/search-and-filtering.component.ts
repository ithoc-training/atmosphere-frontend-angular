import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../services/items.service";
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

  protected items: Product[] = [];

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {

    this.itemsService.getItems()
      .subscribe(items => {
        items.content.forEach(item => {
          console.log('Item:', item);
        });
        this.items = items.content;
      });
  }

}
