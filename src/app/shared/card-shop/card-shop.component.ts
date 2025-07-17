import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartUseCase } from 'src/app/application/cart/use-cases/add-to-cart.usecase';
import { Product } from 'src/app/domain/models/product/product.model';
import { ModalComponent } from '../modal/modal.component';
import { CartRepositoryImpl } from 'src/app/infrastructure/cart/cart.repository.impl';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.scss']
})
export class CardShopComponent {
  image = "./assets/imgs/placeholder.png";
 @Input() product!: Product;
 quantity: number = 1;

  constructor(
    private dialog: MatDialog,
    private addToCart: AddToCartUseCase,
  ) {}

  addToCartHandler() {
  const content = `
    <p><strong>${this.product.name}</strong></p>
    <p>${this.product.description}</p>
    <p><strong>Precio:</strong> $${this.product.pricePerPackage}</p>
    <p><strong>Unidades por paquete:</strong> ${this.product.unitsPerPackage}</p>
  `;

  const dialogRef = this.dialog.open(ModalComponent, {
    data: {
      title: '¿Agregar al carrito?',
      content
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.addToCart.execute({
        type: 'product',
        data: this.product,
        quantity: this.quantity
      }).subscribe( res => {
        console.log('la res', res);
      });
    }
  });
}
 onQuantityChange(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    this.quantity = isNaN(value) || value < 1 ? 1 : Math.floor(value);
  }

  filterNonNumeric(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (
      !/^\d$/.test(event.key) &&
      !allowedKeys.includes(event.key)
    ) {
      event.preventDefault();
    }
  }

}
