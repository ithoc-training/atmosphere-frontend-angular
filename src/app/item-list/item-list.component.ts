import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../services/items.service";
import {CommonModule} from "@angular/common";
import {Item} from "../model/item-models";

@Component({
  selector: 'app-search-and-filtering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {

  protected items: Item[] = [];

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
