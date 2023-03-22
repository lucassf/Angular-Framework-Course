import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productID = Number(routeParams.get('productId'))
    this.product = products.find(prod => prod.id == productID)
  }

  addToCart() {
    if (this.product) {
      this.cartService.addItem(this.product);
      window.alert("Product was added to cart")
    }
  }
}