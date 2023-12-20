import {Routes} from '@angular/router';
import {ItemListComponent} from "./item-list/item-list.component";

export const routes: Routes = [
  { path: '', redirectTo: 'searchAndFiltering', pathMatch: 'full'},
  { path: 'searchAndFiltering', component: ItemListComponent}
];
