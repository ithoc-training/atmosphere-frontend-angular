export interface Pagination<T> {
  content: T
  totalPages: number
  totalElements: number
  pageSize: number
  pageNumber: number
  sortBy: string
  sortOrder: string;
  errors: Error[];
}

export interface Error {
  message: string
}

export interface Item {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: Category
  condition: Condition
}

export interface Category {
  id: string
  name: string
}

export interface Condition {
  id: string
  name: string
}
