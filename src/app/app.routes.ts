import {Routes} from '@angular/router';
import {SearchAndFilteringComponent} from "./search-and-filtering/search-and-filtering.component";

export const routes: Routes = [
  { path: '', redirectTo: 'searchAndFiltering', pathMatch: 'full'},
  { path: 'searchAndFiltering', component: SearchAndFilteringComponent}
];
