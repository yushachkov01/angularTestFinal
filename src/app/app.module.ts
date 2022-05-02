import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,

   
  ],
  imports: [
    BrowserModule,
    AngularYandexMapsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
