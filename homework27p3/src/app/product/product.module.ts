import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ProductDetailComponent,
    ProductsComponent
  ]
})
export class ProductModule { }
