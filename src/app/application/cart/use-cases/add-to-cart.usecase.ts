import { Injectable, inject } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { CartItem } from 'src/app/domain/models/cart/cart-item.model';
import { CartRepository } from 'src/app/domain/repositories/cart/cart.repository';


@Injectable({ providedIn: 'root' })
export class AddToCartUseCase {
  private repository = inject(CartRepository);

  execute(item: CartItem): Observable<void> {
    return this.repository.getAll().pipe(
      take(1),
      switchMap(items => {
        const existing = items.find(i => i.data.id === item.data.id && i.type === item.type);

        if (existing) {
          const updated = { ...existing, quantity: existing.quantity + item.quantity };
          return this.repository.add(updated);
        } else {
          return this.repository.add({ ...item, quantity: item.quantity || 1 });
        }
      })
    );
  }
}

