import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/domain/models/cart/cart-item.model';
import { CartRepository } from 'src/app/domain/repositories/cart/cart.repository';


@Injectable({ providedIn: 'root' })
export class GetAllCartUseCase {
  private repository = inject(CartRepository);

  execute(): Observable<CartItem[]> {
    return this.repository.getAll();
  }
}
