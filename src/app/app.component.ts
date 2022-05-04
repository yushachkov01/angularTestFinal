import { Component } from '@angular/core';
import {Product, DEFAULT_PRODUCTS } from './galery/myInfo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<alert type="info">ng2-bootstrap hello world!</alert>`

})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  // public array: Array<Product> = DEFAULT_PRODUCTS;
  
  
  modal = false;
}
