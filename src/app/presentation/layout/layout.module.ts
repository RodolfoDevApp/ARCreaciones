import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPublicComponent } from './layout-public/layout-public.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LayoutPublicComponent,
    LayoutAdminComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
