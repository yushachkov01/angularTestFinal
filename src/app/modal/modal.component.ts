import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../galery/myInfo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() title="Default title"
  @Input() product: Product
  @Output() close = new EventEmitter();

  public isFormShown: boolean = false

  public onMarkerClick(){
    // alert("на метку нажали")
    this.isFormShown = true
    
    console.log("--------------->" );
  }

  public isFormLoan: boolean = true

  // public takeALoan(){
  //   alert(`Поздравляю,на тебя взят кредит!`)
  //   this.isFormLoan = true
    
  //   console.log("Иу" );
  // }

  public getCoordinates() {
    if (this.product) return this.product.coordinates;
    return [ 55.876448, 37.428645]
  }
}
