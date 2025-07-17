import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './top-header/header.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CardShopComponent } from './card-shop/card-shop.component';
import { ModalComponent } from './modal/modal.component';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SideHeaderComponent,
    FooterComponent,
    CardShopComponent,
    ModalComponent,
    LoadingOverlayComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule  
  ],
  exports: [
    HeaderComponent,
    MaterialModule,
    SideHeaderComponent,
    FooterComponent,
    CardShopComponent,
    LoadingOverlayComponent
  ]
})
export class SharedModule { }
