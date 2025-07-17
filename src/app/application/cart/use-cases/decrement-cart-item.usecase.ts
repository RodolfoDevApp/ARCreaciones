import { Injectable, inject } from '@angular/core';
import { Observable, of, switchMap, take } from 'rxjs';
import { CartItem } from 'src/app/domain/models/cart/cart-item.model';
import { CartRepository } from 'src/app/domain/repositories/cart/cart.repository';

@Injectable({ providedIn: 'root' })
export class DecrementCartItemUseCase {
  private repository = inject(CartRepository);

  execute(target: CartItem): Observable<void> {
    return this.repository.getAll().pipe(
      take(1),
      switchMap(items => {
        const existing = items.find(i => i.data.id === target.data.id && i.type === target.type);

        if (!existing) return of(undefined);

        if (existing.quantity <= 1) {
          return this.repository.remove(target);
        }

        const updated = { ...existing, quantity: existing.quantity - 1 };
        return this.repository.add(updated);
      })
    );
  }
}
