import { NgModule } from '@angular/core';
import { ProductRepository } from './repositories/product/product.repository';
import { CategoryRepository } from './repositories/category/category.repository';
import { ProductRepositoryImpl } from '../infrastructure/product/product.repository.impl';
import { CategoryRepositoryImpl } from '../infrastructure/category/category.repository.impl';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getSpanishPaginatorIntl } from './paginator-intl';
import { CourseRepository } from './repositories/course/course.repository';
import { CourseRepositoryImpl } from '../infrastructure/course/course.repository.impl';
import { CartRepository } from './repositories/cart/cart.repository';
import { CartRepositoryImpl } from '../infrastructure/cart/cart.repository.impl';
import { ReceiptGeneratorService } from './services/receipt-generator.service';
import { ReceiptGeneratorServiceImpl } from '../infrastructure/services/receipt-generator.service.impl';



@NgModule({
  providers: [
    { provide: CategoryRepository, useClass: CategoryRepositoryImpl },
    { provide: CourseRepository, useClass: CourseRepositoryImpl },
    { provide: CartRepository, useClass: CartRepositoryImpl },
    { provide: ProductRepository, useClass: ProductRepositoryImpl },
    { provide: ReceiptGeneratorService, useClass: ReceiptGeneratorServiceImpl },
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() },

  ]
})
export class DomainModule { }
