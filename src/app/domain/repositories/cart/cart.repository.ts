import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart/cart-item.model';

export abstract class CartRepository {
  abstract add(item: CartItem): Observable<void>;
  abstract remove(item: CartItem): Observable<void>;
  abstract getAll(): Observable<CartItem[]>;
  abstract clear(): void;
}
