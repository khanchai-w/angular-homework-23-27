import { ProductModule } from './product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './product/products/products.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =[
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
