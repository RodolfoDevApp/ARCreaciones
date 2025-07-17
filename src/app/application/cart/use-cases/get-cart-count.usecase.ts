import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartRepository } from 'src/app/domain/repositories/cart/cart.repository';

@Injectable({ providedIn: 'root' })
export class GetCartCountUseCase {
  private repository = inject(CartRepository);

  execute(): Observable<string> {
    return this.repository.getAll().pipe(
      map(items => {
        const total = items.reduce((sum, i) => sum + i.quantity, 0);
        return total > 9 ? '9+' : total.toString();
      })
    );
  }
}
