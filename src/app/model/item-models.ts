export interface Category {
  id: string; // UUID
  name: string;
}

export interface Condition {
  id: string; // UUID
  name: string;
}

export interface Product {
  id: string; // UUID
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  condition: Condition;
}

export interface Item {
  id: string; // UUID
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  condition: Condition;
}

export interface Page<T> {
  totalElements: number;
  totalPages: number;
  size: number;
  content: T;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  pageable: Pageable;
  empty: boolean;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface Pageable {
  offset: number;
  sort: Sort;
  paged: boolean;
  unpaged: boolean;
  pageSize: number;
  pageNumber: number;
}
