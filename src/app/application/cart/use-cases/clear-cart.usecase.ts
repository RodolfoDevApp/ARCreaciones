import { inject, Injectable } from '@angular/core';
import { CartRepository } from 'src/app/domain/repositories/cart/cart.repository';

@Injectable({ providedIn: 'root' })
export class ClearCartUseCase {
  private readonly repository = inject(CartRepository);

  execute(): void {
    this.repository.clear(); // Esto dispara el next([]) al observable
  }
}