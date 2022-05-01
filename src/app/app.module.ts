import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { YandexMapComponent } from './yandex-map/yandex-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
   
  ],
  imports: [
    BrowserModule,
    AngularYandexMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
