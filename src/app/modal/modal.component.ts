import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  public form = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
  })

  public onMarkerClick(){
    this.isFormShown = true
  }

  public isFormLoan: boolean = true

  public submitForm() {
    console.log(this.form.value);
    alert("Успешно отправлено!")
  }

  public getCoordinates() {
    if (this.product) return [this.product.coordinates[0], this.product.coordinates[1]];
    return [ 55.876448, 37.428645]
  }
}
