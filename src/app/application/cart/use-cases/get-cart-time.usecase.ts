import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/domain/models/product/product.model';
import { CartRepository } from 'src/app/domain/repositories/cart/cart.repository';

@Injectable({ providedIn: 'root' })
export class GetCartTimeUseCase {
  private repository = inject(CartRepository);

  execute(): Observable<number> {
    return this.repository.getAll().pipe(
      map(items =>
        items.reduce((sum, item) => {
          if (item.type === 'product') {
            return sum + (item.data as Product).productionTime * item.quantity;
          }
          return sum;
        }, 0)
      )
    );
  }
}
