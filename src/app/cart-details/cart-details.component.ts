import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {
  items = this.cartService.getItems()
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })
  
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
  }

  onSubmit() {
    this.items = this.cartService.clearCart()
    window.alert(`Order succesfully submitted: ${this.checkoutForm.value.name} - ${this.checkoutForm.value.address}`)
    this.checkoutForm.reset()
  }
}
