import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Product, getRandomProducts, PRODUCT_PLACEHOLER } from './galery/myInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<alert type="info">ng2-bootstrap hello world!</alert>`

})
export class AppComponent implements OnInit {
  public array: Array<Product> = [];
  public productSelected: Product = PRODUCT_PLACEHOLER;
  public modal = false;
  private cardsLoaded: number = 0;
  private LOAD_CARDS_ON_START: number = 10;
  private SCROLL_LOADING_GAP: number = 100;
  private DEFAULT_PRODUCTS = [];

  ngOnInit(): void {
    this.DEFAULT_PRODUCTS = getRandomProducts();

    document.addEventListener("scroll", () => {
      this.onScroll();
    });

    for (let i = 0; i < this.LOAD_CARDS_ON_START; i++) {
       this.loadNewData();
    }
  }

  public onScroll() {
    if (this.isCameraTouchesBottom()) {
      this.loadNewData();
    }
  }

  private isCameraTouchesBottom(): boolean {
    return (document.body.offsetHeight + document.body.offsetTop <= window.scrollY + window.innerHeight + this.SCROLL_LOADING_GAP);
  }

  
  public loadNewData(): void {
    if (this.cardsLoaded >= this.DEFAULT_PRODUCTS.length) return;

    this.array = [...this.array, this.DEFAULT_PRODUCTS[this.cardsLoaded]]
    this.cardsLoaded++;
  }

  public onProductClick(product: Product) {
    this.productSelected = product;
    this.modal = true;
  }
}

