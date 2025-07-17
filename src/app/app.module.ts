import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationModule } from './presentation/presentation.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryRepository } from './domain/repositories/category/category.repository';
import { CategoryRepositoryImpl } from './infrastructure/category/category.repository.impl';
import { ProductRepository } from './domain/repositories/product/product.repository';
import { ProductRepositoryImpl } from './infrastructure/product/product.repository.impl';
import { DomainModule } from './domain/domain.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PresentationModule,
    BrowserAnimationsModule,
    DomainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
