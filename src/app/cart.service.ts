import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  constructor(
    private http: HttpClient
  ) { }

  addItem(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return []
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shippings.json');
  }
}
