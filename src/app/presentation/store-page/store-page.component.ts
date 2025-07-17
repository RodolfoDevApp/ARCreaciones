import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, combineLatest, finalize, forkJoin, map, Observable, of } from 'rxjs';
import { GetCategoriesUseCase } from 'src/app/application/category/use-cases/get-categories.usecase';
import { GetProductsUseCase } from 'src/app/application/product/use-cases/get-products.usecase';
import { Category } from 'src/app/domain/models/category/category.model';
import { Product } from 'src/app/domain/models/product/product.model';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {
// Datos base
  products$ = new BehaviorSubject<Product[]>([]);
  categories$ = new BehaviorSubject<Category[]>([]);


  // Filtros (estado reactivo)
  private searchTerm$ = new BehaviorSubject<string>('');
  private categoryId$ = new BehaviorSubject<number | null>(null);

  // Paginación (estado reactivo)
  private pageIndex$ = new BehaviorSubject<number>(0);
  private pageSize$ = new BehaviorSubject<number>(12);

  // Variables de UI
  totalItems = 0;
  pageSizeOptions = [12, 24, 48];

  

  filtered$ = combineLatest([
    this.products$,
    this.searchTerm$,
    this.categoryId$
  ]).pipe(
    map(([products, search, category]) =>
      products.filter(product => {
        const matchName = product.name.toLowerCase().includes(search.toLowerCase());
        const matchCat = category ? product.categoryId === category : true;
        return matchName && matchCat;
      })
    )
  );


  paginatedProducts$ = combineLatest([
    this.filtered$,
    this.pageIndex$,
    this.pageSize$
  ]).pipe(
    map(([filtered, pageIndex, pageSize]) => {
      this.totalItems = filtered.length;
      const start = pageIndex * pageSize;
      const end = start + pageSize;
      return filtered.slice(start, end);
    })
  );


  constructor(
    private getProducts: GetProductsUseCase,
    private getCategories: GetCategoriesUseCase,
    private readonly loadingService: LoadingService
    
  ) {}

 ngOnInit(): void {
    this.loadingService.show();

    forkJoin([
      this.getProducts.execute(),
      this.getCategories.execute()
    ]).pipe(
      finalize(() => this.loadingService.hide())
    ).subscribe({
      next: ([products, categories]) => {
        this.products$.next(products);
        this.categories$.next(categories);
      },
      error: (err) => {
        console.error('Error al cargar datos:', err);
      }
    });
  }

  onSearch(value: string) {
    this.pageIndex$.next(0);
    this.searchTerm$.next(value);
  }

  onCategoryChange(value: number | null) {
    this.pageIndex$.next(0);
    this.categoryId$.next(value);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex$.next(event.pageIndex);
    this.pageSize$.next(event.pageSize);
  }
}
