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

  constructor() {}

  ngOnInit(): void {
  }

}
