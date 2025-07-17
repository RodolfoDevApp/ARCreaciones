import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from 'src/app/domain/models/course/course.model';
import { Product } from 'src/app/domain/models/product/product.model';
import { CartRepository } from 'src/app/domain/repositories/cart/cart.repository';

@Injectable({ providedIn: 'root' })
export class GetCartTotalUseCase {
  private repository = inject(CartRepository);

  execute(): Observable<number> {
    return this.repository.getAll().pipe(
      map(items =>
        items.reduce((sum, item) => {
          const price = item.type === 'product'
            ? (item.data as Product).pricePerPackage
            : (item.data as Course).price;
          return sum + price * item.quantity;
        }, 0)
      )
    );
  }
}

