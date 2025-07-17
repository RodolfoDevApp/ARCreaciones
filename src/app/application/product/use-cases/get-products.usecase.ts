import { Injectable, inject } from '@angular/core';
import { ProductRepository } from 'src/app/domain/repositories/product/product.repository';

@Injectable({ providedIn: 'root' })
export class GetProductsUseCase {
  private repository = inject(ProductRepository);

  execute() {
    return this.repository.getAll();
  }
}