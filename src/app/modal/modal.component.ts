import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../galery/myInfo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title="Default title"
  @Input() product: Product
  @Output() close = new EventEmitter<void>();

  public onMarkerClick(){
    alert("на метку нажали")
    
    console.log("--------------->",  );
  }

  public getCoordinates() {
    if (this.product) return this.product.coordinates;
    return [ 55.876448, 37.428645]
  }

  constructor() {}

  ngOnInit(): void {
  }

}
