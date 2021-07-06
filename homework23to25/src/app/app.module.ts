import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';
import { BackendService } from './backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
  },
  {
  path: 'home',
  component: HomeComponent
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'products',
  component: ProductListComponent
  },
  {
  path: '**',
  component: PageNotFoundComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BackendService      //ประกาศ service เพื่อใช้กับ component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
