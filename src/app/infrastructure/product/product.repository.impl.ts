import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MOCK_PRODUCTS } from './product.mock';
import { ProductRepository } from 'src/app/domain/repositories/product/product.repository';

@Injectable({ providedIn: 'root' })
export class ProductRepositoryImpl extends ProductRepository {
  override getAll() {
    return of(MOCK_PRODUCTS);
  }
}
