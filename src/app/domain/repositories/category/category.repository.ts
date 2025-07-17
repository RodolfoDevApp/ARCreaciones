import { Observable } from 'rxjs';
import { Category } from '../../models/category/category.model';

export abstract class CategoryRepository {
  abstract getAll(): Observable<Category[]>;
}
