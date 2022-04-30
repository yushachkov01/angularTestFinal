import { Component } from '@angular/core';
import { Product, DEFAULT_PRODUCTS } from './galery/myInfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public array: Array<Product> = DEFAULT_PRODUCTS;


  modal = false;
}
