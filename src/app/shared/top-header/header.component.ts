import { Component, EventEmitter, Output } from '@angular/core';
import { GetCartCountUseCase } from 'src/app/application/cart/use-cases/get-cart-count.usecase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();
  cartCount$ = this.getCartCount.execute();

  constructor(private getCartCount: GetCartCountUseCase) {}
}
