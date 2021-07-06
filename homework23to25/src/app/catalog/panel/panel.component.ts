import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @ViewChild('productList',{static:true}) productList: ProductListComponent
  constructor() { }

  ngOnInit(): void {
  }

}
