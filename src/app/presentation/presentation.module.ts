import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationRoutingModule } from './presentation-routing.module';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './layout/home/home.component';
import { StorePageComponent } from './store-page/store-page.component';
import { StoriesPageComponent } from './stories-page/stories-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    StorePageComponent,
    StoriesPageComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    SharedModule,
    FormsModule, 
  ]
})
export class PresentationModule { }
