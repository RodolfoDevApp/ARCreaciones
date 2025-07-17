import { Injectable, inject } from '@angular/core';
import { CategoryRepository } from 'src/app/domain/repositories/category/category.repository';

@Injectable({ providedIn: 'root' })
export class GetCategoriesUseCase {
  private repository = inject(CategoryRepository);

  execute() {
    return this.repository.getAll();
  }
}