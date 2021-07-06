import { ProductListComponent } from './catalog/product-list/product-list.component';
import { BackendService } from './backend.service';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('productList',{static:true}) productList: ProductListComponent

  title = 'homework23to25';

  ngOnInit(): void {
    this.productList.products = [
      {
      name: 'ส้มโอ',
      price: 111
      },
      {
      name: 'แตงโม',
      price: 222
      },
      {
      name: 'มะพร้าวนํ้าหอม',
      price: 333
      }
      ];
    }

    constructor(
      backendSevice: BackendService
    ){  }
}
