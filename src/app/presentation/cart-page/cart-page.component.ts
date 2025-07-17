import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { AddToCartUseCase } from 'src/app/application/cart/use-cases/add-to-cart.usecase';
import { ClearCartUseCase } from 'src/app/application/cart/use-cases/clear-cart.usecase';
import { DecrementCartItemUseCase } from 'src/app/application/cart/use-cases/decrement-cart-item.usecase';
import { GetAllCartUseCase } from 'src/app/application/cart/use-cases/get-all-cart.useCase';
import { GetCartTimeUseCase } from 'src/app/application/cart/use-cases/get-cart-time.usecase';
import { GetCartTotalUseCase } from 'src/app/application/cart/use-cases/get-cart-total.usecase';
import { RemoveFromCartUseCase } from 'src/app/application/cart/use-cases/remove-from-cart.usecase';
import { GenerateReceiptUseCase } from 'src/app/application/services/generate-receipt.usecase';
import { Course } from 'src/app/domain/models/course/course.model';
import { Product } from 'src/app/domain/models/product/product.model';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  image = "./assets/imgs/placeholder.png";

  products$: Observable<(Product & { quantity: number })[]>;
  courses$: Observable<Course[]>;
  total$: Observable<number>;
  totalTime$: Observable<number>;
  invoiceNumber: string = '';
  today = new Date().toLocaleDateString('es-MX');

  constructor(
    private getItems: GetAllCartUseCase,
    private getTotal: GetCartTotalUseCase,
    private getTime: GetCartTimeUseCase,
    private clearCartUseCase: ClearCartUseCase,
    private addToCart: AddToCartUseCase,  
    private decrement: DecrementCartItemUseCase,
    private remove: RemoveFromCartUseCase,
    private dialog: MatDialog,
    private generateReceipt: GenerateReceiptUseCase,
    private readonly loadingService: LoadingService
    
  ) {
    const cartItems$ = this.getItems.execute();

    this.products$ = cartItems$.pipe(
      map(items =>
        items
          .filter(item => item.type === 'product')
          .map(item => ({
            ...(item.data as Product),
            quantity: item.quantity,
          }))
      )
    );

    this.courses$ = cartItems$.pipe(
      map(items =>
        items
          .filter(item => item.type === 'course')
          .map(item => item.data as Course)
      )
    );

    this.total$ = this.getTotal.execute();
    this.totalTime$ = this.getTime.execute();
  }

  increment(product: Product) {
    this.addToCart.execute({ data: product, type: 'product', quantity: 1 }).subscribe();
  }

  decrementItem(product: Product) {
    this.decrement.execute({ data: product, type: 'product', quantity: 1 }).subscribe();
  }

  removeCourse(course: Course) {
    this.remove.execute({ data: course, type: 'course', quantity: 1 }).subscribe();
  }

  removeProduct(product: Product) {
    this.remove.execute({ data: product, type: 'product', quantity: 1 }).subscribe();
  }

  onPay() {
  const invoice = Math.floor(100000 + Math.random() * 900000).toString();

  const dialogRef = this.dialog.open(ModalComponent, {
    data: {
      title: '¿Confirmar compra?',
      content: '<p>¿Estás seguro de que deseas proceder con el pago?</p>'
    }
  });

  dialogRef.afterClosed().subscribe(async (confirmed: boolean) => {
    if (confirmed) {
      console.log('entra confirmacion');
      await this.loadingService.wrap(this.generateReceipt.execute('receipt-content', invoice));
      this.clearCartUseCase.execute();
    }
  });
}

}
