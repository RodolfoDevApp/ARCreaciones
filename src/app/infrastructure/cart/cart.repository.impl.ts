import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, delay, tap, map } from 'rxjs';
import { CartItem } from 'src/app/domain/models/cart/cart-item.model';
import { CartRepository } from 'src/app/domain/repositories/cart/cart.repository';

@Injectable({ providedIn: 'root' })
export class CartRepositoryImpl extends CartRepository {
  private items: CartItem[] = [];
  private subject = new BehaviorSubject<CartItem[]>([]);

 override add(item: CartItem): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        const index = this.items.findIndex(
          i => i.data.id === item.data.id && i.type === item.type
        );

        if (index !== -1) {
          this.items[index] = { ...item };
        } else {
          this.items.push({ ...item });
        }

        this.subject.next([...this.items]);
      })
    );
  }

  override remove(item: CartItem): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        this.items = this.items.filter(
          i => !(i.data.id === item.data.id && i.type === item.type)
        );
        this.subject.next([...this.items]);
      })
    );
  }

  override getAll(): Observable<CartItem[]> {
    return this.subject.asObservable();
  }
  
  override clear(): void {
    this.items = [];
    this.subject.next([]);
  }
}
