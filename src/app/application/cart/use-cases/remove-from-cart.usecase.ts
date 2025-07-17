import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/domain/models/cart/cart-item.model';
import { CartRepository } from 'src/app/domain/repositories/cart/cart.repository';

@Injectable({ providedIn: 'root' })
export class RemoveFromCartUseCase {
  private repository = inject(CartRepository);

  execute(item: CartItem): Observable<void> {
    return this.repository.remove(item);
  }
}
