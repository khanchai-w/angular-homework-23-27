import { Product } from './models/product';
import { Injectable } from '@angular/core';

//ฉีด Sevice
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  products: Product;



  constructor() {

   }

   getProducts(){
     return [
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
}
