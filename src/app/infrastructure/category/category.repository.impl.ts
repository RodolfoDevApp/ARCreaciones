import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MOCK_CATEGORIES } from './category.mock';
import { CategoryRepository } from 'src/app/domain/repositories/category/category.repository';

@Injectable({ providedIn: 'root' })
export class CategoryRepositoryImpl extends CategoryRepository {
  override getAll() {
    return of(MOCK_CATEGORIES);
  }
}
