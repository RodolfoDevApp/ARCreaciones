// core/domain/product/product.repository.ts
import { Observable } from 'rxjs';
import { Product } from '../../models/product/product.model';

export abstract class ProductRepository {
  abstract getAll(): Observable<Product[]>;
}
